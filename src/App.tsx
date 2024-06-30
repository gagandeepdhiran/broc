import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow, WalletBalance } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import { useCounterContract } from "./hooks/useCounterContract";
import { useState } from "react";

const StyledApp = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(121,9,74,1) 21%, rgba(0,212,255,1) 100%);
  color: black;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 900px;
  min-height: 100vh;
`;

function App() {
  const { network } = useTonConnect();
  const { value } = useCounterContract();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <StyledApp>
      <AppContainer>
        {!isAuthenticated ? 
          <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', flex:1, alignItems:'center', justifyContent:'center' }}>
            <p style={{ color:'#DDDDDD', fontSize:56, fontWeight:'bolder' }}>GIZA</p>
            <TonConnectButton />
          </div>
          :
          <div>
            <p>Logged in</p>
          </div>
        }
        {/* <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
          <img src="../public/logo.png" height={70} />
        </div>
        <div style={{ display:'flex', flexDirection:'row' }}>
          <div style={{ display:'flex', alignItems:'center', backgroundColor:'#FFFFFF', paddingLeft:5, paddingRight:15, borderRadius:25 }}>
            <div style={{ border:'1px solid #000000', height:30, width:30, borderRadius:15, marginRight:6 }}>

            </div>
            <p style={{ color:'#000000', fontSize:14, fontWeight:'lighter' }}>Hi, Gagandeep</p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', marginTop:40, alignItems:'center' }}>
          <p style={{ color:'#FFFFFF', fontSize:72 }}>$0.00</p>
        </div> */}
        {/* <FlexBoxCol>
          <FlexBoxRow style={{ display:'flex', alignItems:'center' }}>
            <img src="../public/logo.png" height={100} />
          </FlexBoxRow>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          <Counter />
           <TransferTon />
          <Jetton /> 
        </FlexBoxCol> */}
      </AppContainer>
    </StyledApp>
  );
}

export default App;
