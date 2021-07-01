import React, { useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';

import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Body from './Components/Layout/Body';

// import accounting from './funcs/accounting'

const accounting = {
  update: async (budget) => {
      const res = await axios.post('users/accounting', {budget_id: budget._id})
      return res.data
  },
}

function App() {
  const [state, setState] = React.useState({
    theme: 'light',
    drawer: false,
  });
  // Handle selections in menu drawer
  const [selected, setSelected] = React.useState('HOME');
  // Handle signedIn
  const [signedIn, setSignedIn] = React.useState(false);
  // Handle eth_account
  const [eth_account, setEth_account] = React.useState();
  // Handle user logged in from server
  const [user, setUser] = React.useState();
  // Handle budget selected
  const [budget, setBudget] = React.useState()

  const [web3, setWeb3] = React.useState();

  // Connect Metamask
  // TODO: set web3 provider from Metamask
  const connectMetamask = async () => {
    console.log('Connecting Metamask . . .');
    // Detect Metamask
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0]);
      web3 = new Web3(Web3.givenProvider);
      // TODO: change balance from wei to eth
      let balance = await web3.eth.getBalance(accounts[0]);
      let account = {
        address: accounts[0],
        balance,
        chainId: window.ethereum.chainId
      }
      console.log(account);
      setEth_account(account);
      console.log(eth_account);
    }
    // TODO: else pop up with link to donwload metamask and tutorials
  }

  // Auth user
  const authUser = async () => {
    const res = await axios.get('/users/');
    const { user } = res.data;
    const { error } = res.data;
    if (error) {
      console.log(error);
    }
    if(user === undefined) {
      setUser(null);
      setSignedIn(false);
    }else if (user === null) {
      setUser(null);
      setSignedIn(false);
    }else if (user) {
      setUser(user);
      update(user.budgets[0])
      setSignedIn(true);
    }
  }

  // Handle updates
  const update = async (budgetSelected) => {
    if (budgetSelected) {
      let { budget } = await accounting.update(budgetSelected)
      setBudget(budget)
    } else  if (user) {
      setBudget(user.budgets[0])      
    } else {
      setBudget([])
    }
  }

  // Handle theme selections
  const handleChangeTheme = (e) => {
    setState({...state, theme: e.target.value});
  };

  // Handle menu drawer
  const toggleDrawer = () => {
    setState({...state, drawer: !state.drawer});
  }

  useEffect(() => authUser(), []);

  return (
    <div className="App">
      <Header
        setSelected={setSelected}
        handleChangeTheme={handleChangeTheme}
        toggleDrawer={toggleDrawer}
        connectMetamask={connectMetamask}
        authUser={authUser}
        theme={state.theme}
        drawer={state.drawer}
        signedIn={signedIn}
        eth_account={eth_account}
      />        
      <Body
        authUser={authUser}
        selected={selected}
        user={user}
        update={update}
        budget={budget}
        setBudget={setBudget}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
