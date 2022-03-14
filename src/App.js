import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SectionList from "./Components/Section/SectionList";

const App = () => {
  let logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png";
  let clothes = [
    {
      model: "Kids",
      image:
        "https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwb23a6d90/images/page-designer/2021/october/12429_Comp_A_Mobile.jpg?sw=991&sfrm=jpg",
      id: 1,
    },
    {
      model: "Woman",
      image:
        "http://3.bp.blogspot.com/-sl7sUgXJJHA/UtaU07lAVnI/AAAAAAAACEs/5zvfelM_8KU/s1600/5b57620e24c6ffd0084e5e8c3f2a9aed.jpg",
      id: 2,
    },
    {
      model: "Man",
      image: "https://nb.scene7.com/is/image/NB/prodset_m_997H",
      id: 3,
    },
  ];
  let contacts = [
    {
      phoneNumber: "00996555333222",
      email: "newbalance@newbalance.com",
      socialMedia: "@newbalance",
    },
  ];
  return (
    <div>
      <Header logo={logo} clothes={clothes} />
      <SectionList clothes={clothes} />
      <Footer contacts={contacts} />
    </div>
  );
};

export default App;
