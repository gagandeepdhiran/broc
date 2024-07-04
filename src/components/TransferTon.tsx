import Lottie from "lottie-react";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import paymentAnimation from "./paymentAnimation.json";

export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const recipientDetails = {
    quantity: 10,
    address: "UQC1lRNHFw9vi6IjiNvnncNbO4Nw1hjz058v8Q2Fymnf9iPR"
  }

  return (
    <>
      <div style={{ marginTop:20, paddingTop:10, paddingBottom:10, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 15, display: 'flex', flexDirection: 'column', width: '80vw', justifyContent: 'center' }}>
        <div style={{ display:'flex', flexDirection:'row' }}>
          <div>
            <Lottie animationData={paymentAnimation} loop={false} style={{ height:120 }}/>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', flexDirection:'row', marginTop:10, paddingBottom:10, borderBottom:'1px solid #777777' }}>
              <div style={{ border:'1px solid #777777', height:40, width:40, borderRadius:20 }}></div>
              <div style={{ marginLeft:5, alignItems:'center' }}>
                <p style={{ lineHeight:0, fontWeight:'normal', fontSize:16, color:'#111111' }}>Gagandeep Singh</p>
                <p style={{ lineHeight:0.5, fontWeight:'lighter', fontSize:13, color:'#333333' }}>Available: 204.65 TON</p>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'row', marginTop:10 }}>
              <div style={{ border:'1px solid #777777', height:40, width:40, borderRadius:20 }}></div>
              <div style={{ marginLeft:5, alignItems:'center' }}>
                <p style={{ lineHeight:0, fontWeight:'normal', fontSize:16, color:'#111111' }}>GIZA</p>
                <p style={{ lineHeight:0.5, fontWeight:'lighter', fontSize:13, color:'#333333' }}>@GizaAppBot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop:50 }}>
        <p style={{ textAlign: 'center', color:'#DEDEDE' }}>How much?</p>
        <div style={{ paddingLeft: 15, paddingRight: 15, borderRadius: 10 }}>
          <p style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bolder', paddingTop: 5, paddingBottom: 5, fontSize:48, lineHeight:0 }}>{recipientDetails?.quantity}.00 TON</p>
        </div>
        <div style={{ display:'flex', justifyContent:'center' }}>
          <Button
            disabled={!connected}
            style={{ marginTop: 30 }}
            onClick={async () => {
              sender.send({
                to: Address.parse(recipientDetails?.address),
                value: toNano(recipientDetails?.quantity),
              });
            }}
          >
            Transfer Now
          </Button>
        </div>
      </div>
    </>
  );
}
