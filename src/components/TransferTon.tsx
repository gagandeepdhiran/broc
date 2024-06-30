import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";

export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const tonAmount = 10;
  const tonRecipient = "UQC1lRNHFw9vi6IjiNvnncNbO4Nw1hjz058v8Q2Fymnf9iPR";

  return (
    <Card>
      <div style={{ width:'80vw' }}>
        <div style={{ display:'flex', flexDirection:'row' }}>
          <p style={{ flex:1, marginRight:10 }}>Quantity</p>
          <p>10</p>
        </div>
        <div style={{ display:'flex', flexDirection:'row' }}>
          <p style={{ flex:1, marginRight:10 }}>To</p>
          <p style={{ fontSize:12 }}>{tonRecipient}</p>
        </div>
        <Button
          disabled={!connected}
          style={{ marginTop: 18 }}
          onClick={async () => {
            sender.send({
              to: Address.parse(tonRecipient),
              value: toNano(tonAmount),
            });
          }}
        >
          Transfer
        </Button>
      </div>
    </Card>
  );
}
