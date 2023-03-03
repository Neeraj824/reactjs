import React, { Component, useReducer } from 'react'
// import Counter from './Component/Counter'
// import FunctionClick from './Component/FunctionClick'
// import ClassClick from './Component/ClassClick'
// import EventBind from './Component/EventBind'
// import ParentComponent from './Component/ParentComponent'
import UserGretting from './Component/UserGretting'
// import NameList from './Component/NameList'
import Form from './Component/Form'
import LifecycleA from './Component/LifecycleA'
import RefsDemo from './Component/RefsDemo'
import FocusRef from './Component/FocusRef'
import FRIParaent from './Component/FRIParaent'
import PortalDemo from './Component/PortalDemo'
import Hero from './Component/Hero'
import ErrorBoundary from './Component/ErrorBoundary'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import RenderClickCounter from './Component/RenderClickCounter'
import RenderHoverCounter from './Component/RenderHoverCounter'
import WithCounterTwo from './Component/WithCounterTwo'
import ContextComponentC from './Component/ContextComponentC'
import { UserProvider } from './Component/UserContext'
import AxiosUserList from './Component/AxiosUserList'
import AxiosUserForm from './Component/AxiosUserForm'
import HookCounter from './Component/HookCounter'
import HookCounterTwo from './Component/HookCounterTwo'
import HookCounterArray from './Component/HookCounterArray'
import ClassCounterOne from './Component/ClassCounterOne'
import HookCounterOne from './Component/HookCounterOne'
import ClassMouse from './Component/ClassMouse'
import HookMouse from './Component/HookMouse'
import IntervalClassCounter from './Component/IntervalClassCounter'
import IntervalHookCounter from './Component/IntervalHookCounter'
import DataFetchHook from './Component/DataFetchHook'
import DataFetchHookById from './Component/DataFetchHookById'
import UseContextComponentC from './Component/UseContextComponentC'
import UseReducerCounterOne from './Component/UseReducerCounterOne'
import UseReducerCounterTwo from './Component/UseReducerCounterTwo'
import UseReducerComponentA from './Component/UseReducerComponentA'
import UseReducerComponentB from './Component/UseReducerComponentB'
import UseReducerComponentC from './Component/UseReducerComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()



class App extends Component {
  
  render() {
    // const [count,dispatch] = useReducer(reducer,initialState)
    return (
      <div>
        <UseReducerComponentA/>
        <UseReducerComponentB/>
        <UseReducerComponentC/>
        {/* <UseReducerCounterOne/> */}
        {/* <UseReducerCounterTwo/> */}
        {/* <UserContext.Provider value={'neeraj'}>
          <ChannelContext.Provider value={'My Education'}>
            <UseContextComponentC/>
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <DataFetchHookById/> */}
        {/* <DataFetchHook/> */}
        {/* <ClassMouse/> */}
        {/* <IntervalClassCounter/>
        <IntervalHookCounter/> */}
        {/* <HookMouse/> */}
        {/* <ClassCounterOne/> */}
        {/* <HookCounterOne/> */}
        {/* <AxiosUserList/> */}
        {/* <AxiosUserForm/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterArray/> */}
        {/* <UserProvider value="neeraj">
          <ContextComponentC/>
        </UserProvider> */}

         {/* <WithCounterTwo render = {(count, incrementCount) => (
          <RenderClickCounter count={count} incrementCount = {incrementCount} />
        ) }/>

        <WithCounterTwo render = {(count, incrementCount) => (
          <RenderHoverCounter count={count} incrementCount = {incrementCount} />
        ) }/>  */}

         {/* <ClickCounter/>
        <HoverCounter/> */}
        
        {/* <PortalDemo/> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker"/>
        </ErrorBoundary> */}
        {/* <FocusRef/> */}
        {/* <FRIParaent/> */}
        {/* <RefsDemo/> */}
        {/* <LifecycleA/> */}
        {/* <Form/> */}
        {/* <NameList/> */}
        {/* <UserGretting/> */}
        {/* <ParentComponent/> */}
        {/* <Counter name="Neeraj" profession="Software Engineer"/> */}

        {/* <FunctionClick/> */}
        {/* <ClassClick/>
        <EventBind/> */}
      </div>
    )
  }
}
export default App