import { TonConnectButton } from "@tonconnect/ui-react";
import { TransferTon } from "../TransferTon";
import { useState } from "react";

// const downline = [
//     [{ id: "100", name: "Gagandeep Singh"}],
//     [{ id: "101", name: "Manish Malhotra"},{ id: "102", name: "Deepak Kalal"}],
//     [{ id: "103", name: "Will Smith"},{ id: "104", name: "Martha Kapoor"},{ id: "105", name: "Travis Scott"},{ id: "106", name: "Kylie Jenner"}],
// ]

export function Dashboard() {
    // const [topIndex, setTopIndex] = useState('100');
    return(
        <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', flex:1, alignItems: 'center', justifyContent:'center' }}>
            <p style={{ color:'#DDDDDD', fontSize:56, fontWeight:'bolder', lineHeight:0 }}>GIZA</p>
            <TonConnectButton />
            <div style={{ alignItems:'center', marginTop:50 }}>
              <TransferTon />
            </div>
        </div>
    )
    // return(
    //     <div>
    //         <div style={{ display:'flex', flexDirection:'row', backgroundColor:'rgba(0,0,0,0.5)', paddingBottom:20, alignItems:'center' }}>
    //             <div style={{ width:80, height:80, borderRadius:40, border:'1px solid #FFFFFF', marginTop:20, marginLeft:20 }}>
    //             </div>
    //             <div style={{ marginLeft:20, marginTop:30 }}>
    //                 <p style={{ fontSize:20, color:'#FFFFFF', lineHeight:0, fontWeight:'bolder' }}>Gagandeep Singh</p>
    //                 <p style={{ fontSize:16, color:'#FFFFFF', lineHeight:1, fontWeight:'lighter' }}>Silver</p>
    //             </div>
    //         </div>
    //         <div style={{ marginTop:30, marginLeft:5, marginRight:5 }}>
    //             <div style={{ display:'flex', flexDirection:'row' }}>
    //                 <div style={{ height:60, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex][0]} {topIndex === 0 && ` (You)`}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+1}</p>
    //                 </div>
    //             </div>
    //             <div style={{ display:'flex', flexDirection:'row' }}>
    //                 <div style={{ height:60, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex+1][0]}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+2}</p>
    //                 </div>
    //                 <div style={{ height:60, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex+1][1]}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+2}</p>
    //                 </div>
    //             </div>
    //             <div style={{ display:'flex', flexDirection:'row' }}>
    //                 <div style={{ height:80, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex+2][0]}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+3}</p>
    //                 </div>
    //                 <div style={{ height:80, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex+2][1]}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+3}</p>
    //                 </div>
    //                 <div style={{ height:80, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex+2][2]}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+3}</p>
    //                 </div>
    //                 <div style={{ height:80, justifyContent:'space-between', paddingTop:12, marginTop:5, marginBottom:5, flex:1, marginLeft:2, marginRight:2, paddingLeft:2, paddingRight:2, borderRadius:10, backgroundColor:'rgba(0,0,0,0.6)' }}>
    //                     <p style={{ textAlign:'center', color:'#FFFFFF', fontSize:16, lineHeight:0 }}>{downline[topIndex+2][3]}</p>
    //                     <p style={{ textAlign:'center', color:'#DDDDDD', fontSize:12 }}>Level {topIndex+3}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}