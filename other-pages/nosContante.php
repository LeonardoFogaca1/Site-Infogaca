<?php
// Arquivo processar-contato.php

// Inicializa a sessão para mensagens de feedback
session_start();

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Coleta os dados do formulário com validação básica
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
    $assunto = filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);
    
    // Verifica campos obrigatórios
    if (empty($nome) || empty($email) || empty($mensagem)) {
        $_SESSION['mensagem'] = "Erro: Preencha todos os campos obrigatórios.";
        $_SESSION['tipo'] = "erro";
        header("Location: nos-Contate.html");
        exit;
    }
    
    // Traduz o valor do assunto para texto amigável
    $assuntos = [
        'orcamento' => 'Orçamento',
        'suporte' => 'Suporte técnico',
        'duvida' => 'Dúvidas',
        'parceria' => 'Parcerias',
        'outro' => 'Outro assunto'
    ];
    
    $assuntoTexto = isset($assuntos[$assunto]) ? $assuntos[$assunto] : 'Contato do site';
    
    // Configura o destinatário
    $para = "infogacatecnologia@gmail.com";
    
    // Configura o assunto do email
    $assuntoEmail = "[$assuntoTexto] Contato pelo site - " . $nome;
    
    // Configura o corpo do email
    $corpo = "Um novo contato foi enviado através do site:\n\n";
    $corpo .= "Nome: " . $nome . "\n";
    $corpo .= "Email: " . $email . "\n";
    $corpo .= "Telefone: " . $telefone . "\n";
    $corpo .= "Assunto: " . $assuntoTexto . "\n\n";
    $corpo .= "Mensagem:\n" . $mensagem . "\n";
    
    // Configura os cabeçalhos do email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Tenta enviar o email
    if (mail($para, $assuntoEmail, $corpo, $headers)) {
        // Sucesso no envio
        $_SESSION['mensagem'] = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
        $_SESSION['tipo'] = "sucesso";
    } else {
        // Falha no envio
        $_SESSION['mensagem'] = "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo telefone.";
        $_SESSION['tipo'] = "erro";
    }
    
    // Redireciona de volta com a mensagem
    header("Location: nos-Contate.html");
    exit;
} else {
    // Acesso direto ao script sem envio do formulário
    header("Location: nos-Contate.html");
    exit;
}
