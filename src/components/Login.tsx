import { TonConnectButton } from "@tonconnect/ui-react";

export function Login() {
    return(
        <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', flex:1, alignItems:'center', justifyContent:'center' }}>
            <p style={{ color:'#DDDDDD', fontSize:56, fontWeight:'bolder' }}>GIZA</p>
            <TonConnectButton />
        </div>
    )
}