<p align="center">
    <img width="320" src="https://github.com/GankLun/R-Design/blob/master/logo.jpg">
</p>

## R-Design
[![npm package](https://github.com/GankLun/R-Design/blob/master/link.svg)](https://www.npmjs.org/package/r-design)
R-Design 是基于react native 和 antd-mobile的移动端RN UI Widget。

## 特性

- 基于 React Native 的多平台支持。
- 自由的视觉样式配置，适应各类产品风格。
- 提供类型定义文件,一看便知如何使用,方便自动提示。

## 为什么使用它
- 在这里首先十分感谢蚂蚁金服ant design mobile团队开发的UI Widget，可以说十分方便了，但是使用过程中还是有不少问题，例如部分组件修改样式不方便或者说组件的部分样式无法修改，输入框在RN环境下使用时clear按钮无法显示,inputItem,Switch必须在List下工作等等问题，其他问题可以看官方issue,总体来说ant design mobile服务于蚂蚁及口碑无线业务更加合适。
- RN官方提供的checkbox组件不知道在哪里。
- RN官方提供的FlatList的onEndReached方法会触发两次，以及当网络中断或者没有数据需要显示ListEmptyComponent默认插画时高度无法撑满等等情况。
- RN官方以及Ant Design Mobile组件对于Switch等高度依赖于平台特性，例如我希望Android端就想显示IOS的效果不容易实现等等。
- RN官方实现Button需要复合组件封装等等。

## 设计原则
- 组件尽量屏蔽及解决各种issue,调用者无需关注。
- 样式基于默认规则的同时又支持高度定制化完成个性化需求。
- 完全基于属性配置。

## 特别说明
- DrawerLayout,TabBar,TabLayout请直接使用react-navigation中的DrawerNavigator和TabNavigator。R-Design里的RTabBarItem可以完美契合这两组件。

### 配置要求

```
node@4+
npm@3+
```

## 参考链接

- [首页](http://mobile.ant.design)
- [RN中文网站](https://reactnative.cn/)
- [react-navigation](https://github.com/react-navigation/react-navigation)
