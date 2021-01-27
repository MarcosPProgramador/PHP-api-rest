-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jan-2021 às 19:48
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_apirest`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_admin.users`
--

CREATE TABLE `tb_admin.users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.users`
--

INSERT INTO `tb_admin.users` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, 'Marcos', 'Proença', 'marcosproenca144@gmail.com', '1112131415');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_admin.usersonline`
--

CREATE TABLE `tb_admin.usersonline` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.usersonline`
--

INSERT INTO `tb_admin.usersonline` (`id`, `name`, `email`, `ip`, `lastaction`) VALUES
(12, 'Pedro', 'Souza', '100.100.100.100', '2021-01-14 15:58:45'),
(16, 'Julia', 'Jesus', '154.112.321.424', '2021-01-20 15:59:09');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_admin.userstoday`
--

CREATE TABLE `tb_admin.userstoday` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.userstoday`
--

INSERT INTO `tb_admin.userstoday` (`id`, `name`, `email`, `ip`, `lastaction`) VALUES
(7, 'Marcos', 'e', '154.224.134.574', '2021-01-14 15:59:21'),
(8, 'João', 'a', '145.245.214.231', '2021-01-14 15:59:28'),
(9, 'Matheus', 't', '147.124.144.154', '2021-01-14 15:59:36'),
(10, 'd', 'd', 'd', '2021-01-14 16:00:23'),
(11, 'e', 'ef', 'ef', '2021-01-14 16:00:35');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_admin.usersvisited`
--

CREATE TABLE `tb_admin.usersvisited` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.usersvisited`
--

INSERT INTO `tb_admin.usersvisited` (`id`, `name`, `email`, `ip`, `lastaction`) VALUES
(53, 'Yago', 'sa', '975.587.487.620', '2021-01-14 16:00:46'),
(54, 'Gabriel', 'r', '345.875.984.154', '2021-01-14 16:00:56'),
(55, 'Sabrina', 'd', '991.457.157.645', '2021-01-14 16:01:03'),
(56, 'e', 'ds', 's', '2021-01-14 16:01:11'),
(57, 's', 'se', 'd', '2021-01-14 16:01:11'),
(58, 'e', 'see', 'e', '2021-01-14 16:01:27'),
(59, 'rw', 'w', 'w', '2021-01-14 16:01:27'),
(60, 'a', 'a', 'a', '2021-01-14 16:01:56'),
(61, 'q', 'q', 'q', '2021-01-14 16:01:56'),
(62, 'z', 'z', 'z', '2021-01-14 16:02:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.users`
--

CREATE TABLE `tb_site.users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `token` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.users`
--

INSERT INTO `tb_site.users` (`id`, `firstname`, `lastname`, `email`, `password`, `token`, `lastaction`) VALUES
(1, 'manteiga', 'butter', 'manteiga@gmail.com', '1112131415', '600e88d6c8b24', '2021-01-20 21:06:38'),
(2, 'leite', 'milk', 'leite@gmail.com', '1112131415', '600b58d6c0b23', '2021-01-22 23:59:34'),
(3, 'ovos', 'eggs', 'ovos122@gmail.com', '1112131415', '600b5c3627e00', '2021-01-23 00:13:58'),
(4, 'açucar', 'sugar', 'açucar144@gmail.com', '1112131415', '600b5c5016e55', '2021-01-23 00:14:24'),
(48, 'Marcos', 'Proença', 'marcosproenca144@gmail.com', '1112131415', '600db2891f06e', '2021-01-24 18:46:49'),
(49, 'Marcos', 'Proença', 'marceosproenca144@gmail.com', '16546544664654', '600db4e1ca373', '2021-01-24 18:56:49');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_admin.users`
--
ALTER TABLE `tb_admin.users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `tb_admin.usersonline`
--
ALTER TABLE `tb_admin.usersonline`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `tb_admin.userstoday`
--
ALTER TABLE `tb_admin.userstoday`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `tb_admin.usersvisited`
--
ALTER TABLE `tb_admin.usersvisited`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices para tabela `tb_site.users`
--
ALTER TABLE `tb_site.users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_admin.users`
--
ALTER TABLE `tb_admin.users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tb_admin.usersonline`
--
ALTER TABLE `tb_admin.usersonline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `tb_admin.userstoday`
--
ALTER TABLE `tb_admin.userstoday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tb_admin.usersvisited`
--
ALTER TABLE `tb_admin.usersvisited`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de tabela `tb_site.users`
--
ALTER TABLE `tb_site.users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
