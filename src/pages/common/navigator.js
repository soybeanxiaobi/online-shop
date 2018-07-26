import React from 'react'

import { Link,withRouter } from 'react-router-dom'

//导入导航栏内容
// import navCont from './navCont'

 class Nav extends React.Component{
    render(){
        // console.log(this.props.history.location.pathname);
        // console.log(this.state.navContArr);
        return(
            <ul className="nav nav-pills">
            {/*循环导航栏
                *不可以嵌套Router标签   
            */}            
                <li className={this.props.history.location.pathname === '/' ? 'active' : ''} role="presentation">
                    <Link className="liBtn" to='/'>所有产品</Link>
                </li>
               <li className={this.props.history.location.pathname === '/myProducts' ? 'active' : ''} role="presentation">
                    <Link className="liBtn" to='/myProducts'>我的产品</Link>
                </li>
            </ul>
        )
    }

}
//通过withRouter给Nav组件注入路由信息
Nav = withRouter(Nav);
export default Nav;