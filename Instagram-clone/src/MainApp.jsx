import Feed from "./Feed";
import Fetch from "./Fetch";
import Sidebar from "./Sidebar"; 
import Suggestions from "./Suggestions";
const MainApp=()=>{
  return (
   <div className="d-flex vh-100">
    <div className="w-20"><Sidebar/></div>
    <div className="w-50"><Feed/></div>
    <div className="w-30"><Suggestions/></div>
   </div>
  );
}
export default MainApp;