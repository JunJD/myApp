const menuList = [
    {
        label: '首页',
        key: '/home'
    },
    {
        label: '城市管理',
        key: '/city'
    },
    {
        label: '订单管理',
        key: '/order',
        btnlist: [
            {
                label: '订单详情',
                key: 'detail'
            },
            {
                label: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        label: '员工管理',
        key: '/user'
    },
    {
        label: '车辆地图',
        key: '/bikeMap'
    },
    {
        label: '图标',
        key: '/charts',
        children: [
            {
                label: '柱形图',
                key: '/charts/bar'
            },
            {
                label: '饼图',
                key: '/charts/pie'
            },
            {
                label: '折线图',
                key: '/charts/line'
            },
        ]
    },
    {
        label: '权限设置',
        key: '/permission'
    },
];
    const menuHandel=(data)=>{
        data.map((item)=>{
        item.title=item.label
        if(item.children){
            menuHandel(item.children)
        }
        return item
    })
}
menuHandel(menuList)
export default menuList;