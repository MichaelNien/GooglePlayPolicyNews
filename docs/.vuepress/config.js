module.exports = {
  title: 'Google Play Policy News',
  description: 'Google Play Policy News',
  base: '/GooglePlayPolicyNews/',
  repo: 'https://github.com/MichaelNien/GooglePlayPolicyNews',
  plugins: [
	'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '首頁'],
	  {
        title: '2022',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/2022/GooglePlay_2022_Q3_政策更新.md', 'GooglePlay 2022 Q3 政策更新'],
		  ['/2022/GooglePlay_2022_Q4_政策更新.md', 'GooglePlay 2022 Q4 政策更新'],
        ]
      },
	  {
        title: '2023',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/2023/GooglePlay_2023_Q2_政策更新.md', 'GooglePlay 2023 Q2 政策更新'],
		  ['/2023/GooglePlay_2023_Q3_政策更新.md', 'GooglePlay 2023 Q3 政策更新'],
		  ['/2023/GooglePlay_2023_Q4_政策更新.md', 'GooglePlay 2023 Q4 政策更新'],
        ]
      },
	  {
        title: '2024',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/2024/GooglePlay_2024_Q2_政策更新.md', 'GooglePlay 2024 Q2 政策更新'],
        ]
      },
	  {
        title: '2025',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/2025/GooglePlay_2025_Q2_政策更新.md', 'GooglePlay 2025 Q2 政策更新'],
        ]
      },
    ],
  }
}