import { DashboardOutlined, RadarChartOutlined, RadiusSettingOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dash-clash`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
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

const mainDataNavTree = [{
  key: 'main data',
  path: `${APP_PREFIX_PATH}/project`,
  title: 'sidenav.main.data',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'data-project',
      path: `${APP_PREFIX_PATH}/project/project-list`,
      title: 'sidenav.main.project',
      icon: RadiusSettingOutlined,
      breadcrumb: false,
      submenu: []
    },

  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...mainDataNavTree
]

export default navigationConfig;
