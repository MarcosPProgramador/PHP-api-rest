-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Fev-2021 às 04:23
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
  `token` varchar(100) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.usersonline`
--

INSERT INTO `tb_admin.usersonline` (`id`, `name`, `email`, `token`, `ip`, `lastaction`) VALUES
(33, 'Marcos', 'marcosproenca144@gmail.com', '6026f4aa8ce34', '::1', '2021-02-13 00:23:20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_admin.userstoday`
--

CREATE TABLE `tb_admin.userstoday` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.userstoday`
--

INSERT INTO `tb_admin.userstoday` (`id`, `name`, `email`, `token`, `ip`, `lastaction`) VALUES
(10, 'João', 'joaoygo15@gmail.com', '60233747544fb', '::1', '2021-02-09 22:32:40');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_admin.usersvisited`
--

CREATE TABLE `tb_admin.usersvisited` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `lastaction` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_admin.usersvisited`
--

INSERT INTO `tb_admin.usersvisited` (`id`, `name`, `email`, `token`, `ip`, `lastaction`) VALUES
(4, 'Sabrina', 'sabrinajesus144@gmail.com', '60233130ee69a', '::1', '2021-02-09 22:09:29'),
(5, 'Pedro', 'pedrosouza14@gmail.com', '602407b62447a', '127.0.0.1', '2021-02-10 13:47:41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.productbrand`
--

CREATE TABLE `tb_site.productbrand` (
  `id` int(11) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.productbrand`
--

INSERT INTO `tb_site.productbrand` (`id`, `brand`, `product_id`) VALUES
(1, 'Galaxy X1', 1),
(2, 'Galaxy S20', 1),
(3, 'Samsung X2', 1),
(4, 'Xiomi A1', 1),
(5, 'Motorola S5', 1),
(6, 'Iphone X3', 1),
(7, 'Galaxy A9', 1),
(8, 'Galaxy X4', 1),
(9, 'Motorola X5', 1),
(10, 'Samsung S1', 1),
(11, 'Galaxy A10', 1),
(12, 'Consul', 2),
(13, 'Electrolux', 2),
(14, 'Panasonic', 2),
(15, 'Samsung', 2),
(16, 'Electrolux', 3),
(17, 'Consul', 3),
(18, 'Dako', 3),
(19, 'Tramontina', 3),
(20, 'Brastemp', 3),
(21, 'Lenovo', 4),
(22, 'HP', 4),
(23, 'Microsoft', 4),
(24, 'Dell', 4),
(25, 'Acer', 4),
(26, 'Apple', 4),
(27, 'Razer', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.productname`
--

CREATE TABLE `tb_site.productname` (
  `id` int(11) NOT NULL,
  `product` varchar(100) NOT NULL,
  `brand_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.productname`
--

INSERT INTO `tb_site.productname` (`id`, `product`, `brand_id`) VALUES
(1, 'Celular', 1),
(2, 'Geladeira', 2),
(3, 'Fogão', 3),
(4, 'Computador', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.products`
--

CREATE TABLE `tb_site.products` (
  `id` int(11) NOT NULL,
  `product` varchar(60) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.products`
--

INSERT INTO `tb_site.products` (`id`, `product`, `image`, `price`) VALUES
(8, 'Celular - Galaxy X1', '60273c87f3378.jpg', 5010.4),
(9, 'Celular - Galaxy X1', '60273c9519dc9.jpg', 500.5),
(10, 'Celular - Galaxy X1', '60273cc23701d.jpg', 451.51),
(11, 'Celular - Galaxy X1', '60273cd07657e.jpg', 52301),
(12, 'Celular - Galaxy X1', '60273ce1d3cb9.jpg', 451.51),
(15, 'Computador - Microsoft', '60273e60df748.jpg', 451.51),
(16, 'Computador - Lenovo', '60273e7a3e481.jpg', 5010.4),
(39, 'Celular - Iphone X3', '60273e975ad94.jpg', 5010.4),
(40, 'Fogão - Electrolux', '60273f6e27797.jpg', 5010.4),
(42, 'Celular - Galaxy X1', '6027405d84621.jpg', 52301),
(43, 'Celular - Galaxy X1', '602740afb6b00.jpg', 5010.4),
(44, 'Celular - Galaxy X1', '60274143db61f.jpg', 5010.4),
(45, 'Celular - Galaxy X1', '6027449143e3e.jpg', 52301),
(46, 'Celular - Galaxy X1', '602744e91c244.jpg', 5010.4),
(47, 'Celular - Galaxy X1', '60274531efd00.jpg', 5010.4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.user.createdproduct`
--

CREATE TABLE `tb_site.user.createdproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `token` varchar(100) NOT NULL,
  `email` varchar(60) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.user.createdproduct`
--

INSERT INTO `tb_site.user.createdproduct` (`id`, `name`, `token`, `email`, `price`) VALUES
(1, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 5010.4),
(2, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 5010.4),
(3, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 5010.4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.user.favoritesproduct`
--

CREATE TABLE `tb_site.user.favoritesproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `token` varchar(100) NOT NULL,
  `email` varchar(60) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.user.favoritesproduct`
--

INSERT INTO `tb_site.user.favoritesproduct` (`id`, `name`, `token`, `email`, `product_id`, `price`) VALUES
(1, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 9, 500.5),
(3, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 10, 451.51),
(4, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 11, 52301),
(5, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 12, 451.51),
(6, 'Computador - Microsoft', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 15, 451.51);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_site.user.purchasedproduct`
--

CREATE TABLE `tb_site.user.purchasedproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `token` varchar(100) NOT NULL,
  `email` varchar(60) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.user.purchasedproduct`
--

INSERT INTO `tb_site.user.purchasedproduct` (`id`, `name`, `token`, `email`, `price`) VALUES
(1, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 500.5),
(2, 'Celular - Galaxy X1', '6026f4aa8ce34', 'marcosproenca144@gmail.com', 5010.4);

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
  `lastaction` datetime NOT NULL,
  `money` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tb_site.users`
--

INSERT INTO `tb_site.users` (`id`, `firstname`, `lastname`, `email`, `password`, `token`, `lastaction`, `money`) VALUES
(2, 'Marcos', 'Proença', 'marcosproenca144@gmail.com', '1112131415', '6026f4aa8ce34', '2021-02-13 00:23:20', 122962),
(3, 'Sabrina', 'Jesus', 'sabrinajesus144@gmail.com', '1112131415', '60234130ee69a', '2021-02-09 22:09:29', 1789.6),
(4, 'Pedro', 'Souza', 'pedrosouza144@gmail.com', '1112131415', '602326082ed1d', '2021-02-09 22:13:32', 0),
(6, 'João', 'Ygo', 'joaoygo15@gmail.com', '1112131415', '60233747544fb', '2021-02-09 22:32:40', 2189.6),
(7, 'Pedro', 'Souza', 'pedrosouza147@gmail.com', '1112131415', '602407b62447a', '2021-02-10 14:17:03', 863477);

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
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Índices para tabela `tb_admin.userstoday`
--
ALTER TABLE `tb_admin.userstoday`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Índices para tabela `tb_admin.usersvisited`
--
ALTER TABLE `tb_admin.usersvisited`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Índices para tabela `tb_site.productbrand`
--
ALTER TABLE `tb_site.productbrand`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_site.productname`
--
ALTER TABLE `tb_site.productname`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `brand_id` (`brand_id`);

--
-- Índices para tabela `tb_site.products`
--
ALTER TABLE `tb_site.products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `image` (`image`);

--
-- Índices para tabela `tb_site.user.createdproduct`
--
ALTER TABLE `tb_site.user.createdproduct`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_site.user.favoritesproduct`
--
ALTER TABLE `tb_site.user.favoritesproduct`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tb_site.user.purchasedproduct`
--
ALTER TABLE `tb_site.user.purchasedproduct`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de tabela `tb_admin.userstoday`
--
ALTER TABLE `tb_admin.userstoday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `tb_admin.usersvisited`
--
ALTER TABLE `tb_admin.usersvisited`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_site.productbrand`
--
ALTER TABLE `tb_site.productbrand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `tb_site.productname`
--
ALTER TABLE `tb_site.productname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tb_site.products`
--
ALTER TABLE `tb_site.products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de tabela `tb_site.user.createdproduct`
--
ALTER TABLE `tb_site.user.createdproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_site.user.favoritesproduct`
--
ALTER TABLE `tb_site.user.favoritesproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tb_site.user.purchasedproduct`
--
ALTER TABLE `tb_site.user.purchasedproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_site.users`
--
ALTER TABLE `tb_site.users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
