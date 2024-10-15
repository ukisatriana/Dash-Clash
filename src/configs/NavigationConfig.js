import { DashboardOutlined, RadarChartOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    // {
    //   key: 'dashboards-default',
    //   path: `${APP_PREFIX_PATH}/dashboards/default`,
    //   title: 'sidenav.dashboard.default',
    //   icon: DashboardOutlined,
    //   breadcrumb: false,
    //   submenu: []
    // },
    {
      key: 'dashboards-clash-main',
      path: `${APP_PREFIX_PATH}/dash-clash/default`,
      title: 'sidenav.dashboard.summary',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-clash-detail',
      path: `${APP_PREFIX_PATH}/dash-clash/sales`,
      title: 'sidenav.dashboard.detail',
      icon: RadarChartOutlined,
      breadcrumb: false,
      submenu: []
    }

  ]
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
