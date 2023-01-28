import MyHeader from './myheader';
import MyBody from './mybody';
import MyFooter from './myfooter';




const App = () => {

  return (
    <div className="min-h-screen flex flex-col 
    font-sans " >
      <MyHeader />
      <MyBody />
      <MyFooter />
    </div>
  )
}

export default App;

