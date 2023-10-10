import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vithorframos.github.io/VithorTeste/',
	base: '/docs',
	integrations: [
		starlight({
			favicon: '../src/assets/favicon-32x32.png',
			head: [
				// Adiciona um favicon ICO de fallback para o Safari.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '../public/favicon-32x32.png',
						sizes: '32x32',
					},
				},
			],
			logo: {
				src: '../src/assets/logoAe.png',
			},
			title: 'Safe2Pay',
			social: {
				github: 'https://github.com/Vithorframos/',
				youtube: 'https://youtube.com.br',
			},
			sidebar: [
				{
					label: 'Guides', collapsed: true,
					// Autogenerate a group of links for the 'guides' directory.
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Operacional', collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Acesso Rápido', link: '/guides/example/1', collapsed: true, },
						{ label: 'Tempo Real', link: '/guides/example/1' },
						{ label: 'Transações', link: '/guides/example/1' },
						{ label: 'Clientes', link: '/guides/example/1' },
					],
				},
				{
					label: 'Financeiro', collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Conta corrente', link: '/guides/example/1' },
						{ label: 'Transferência Bancária', link: '/guides/example/1' },
						{ label: 'Antecipação de Saldo', link: '/guides/example/1' },
						{ label: 'Gerenciar Antecipação', link: '/guides/example/1' },
						{ label: 'Gerencia Contestações', link: '/guides/example/1' },
					],
				},
				{
					label: 'Pagamento', collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Realizar Cobrança', link: '/guides/example/1' },
						{ label: 'Gerencia Cobranças', link: '/guides/css-and-tailwind/' },
						{
							label: 'Link de Cobranças', collapsed: true,
							items: [
								{ label: 'Criar Link', link: '/guides/css-and-tailwind/' },
								{ label: 'Gerenciar Link', link: '/guides/css-and-tailwind/' },
							],
						},
						{
							label: 'Carnê', collapsed: true,
							items: [
								{ label: 'Gerar Carnê', link: '/guides/css-and-tailwind/' },
								{ label: 'Gerencia Carnês', link: '/guides/css-and-tailwind/' },
							],
						},
					],
				},
				{
					label: 'Marketplace', collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Gerenciar Contas', link: '/guides/example/1' },
						{ label: 'Incluir Subconta', link: '/guides/example/1' },
					],
				},
				{
					label: 'Recorrência', collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Planos', link: '/guides/example/1' },
						{ label: 'Assinaturas', link: '/guides/example/1' },
					],
				},
				{
					label: 'Administração', collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Configurações', link: '/guides/example/1' },
						{ label: 'Extrato de Cobrança', link: '/guides/example/1' },
						{ label: 'Usuário Adicionais', link: '/guides/example/1' },
						{ label: 'Permissões', link: '/guides/example/1' },
						{ label: 'Notificações de Transações', link: '/guides/example/1' },
						{ label: 'Reenvio de Notificações', link: '/guides/example/1' },
						{ label: 'Histórico de Alteração de Transações', link: '/guides/example/1' },
						{ label: 'Taxas', link: '/guides/example/1' },
					],
				},
			],
			customCss: [
				// Caminho relativo ao seu arquivo CSS customizado
				'../src/styles/custom.css',
			],
		}),
	],
});
