
const routes = [
    {
        path: '/',
        icon: 'idcard',
        exact: false,
        title: 'Cadastros',
        routes: [
            {
                path: '/cadastro/characters',
                exact: false,
                title: 'Characters',
                // component: Character,
            },
        ]
    }
]

export default routes
