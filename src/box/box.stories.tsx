import React from "react";
import { storiesOf } from "@storybook/react";
import { ContractIcon } from "@alethio/ui/lib/icon/ContractIcon";
import { LayoutRow } from "@alethio/ui/lib/layout/content/LayoutRow";
import { LayoutRowItem } from "@alethio/ui/lib/layout/content/LayoutRowItem";
import { Label } from "@alethio/ui/lib/data/Label";
import { LayoutSection } from "@alethio/ui/lib/layout/content/LayoutSection";
import { AccountMinedBlocksBox } from "./account/AccountMinedBlocksBox";
import { AccountAliasBox } from "./account/AccountAliasBox";
import { AccountTypeBox } from "./account/AccountTypeBox";
import { MinerLabelBox } from "./account/MinerLabelBox";
import { BlockHashBox } from "./block/BlockHashBox";
import { BlockNumberBox } from "./block/BlockNumberBox";
import { BlockSizeBox } from "./block/BlockSizeBox";
import { ParentHashBox } from "./block/ParentHashBox";
import { TxCountBox } from "./block/TxCountBox";
import { UnclesCountBox } from "./block/UnclesCountBox";
import { TxHashBox } from "./tx/TxHashBox";
import { TimeInPoolBox } from "./tx/TimeInPoolBox";
import { TxTypeBox } from "./tx/TxTypeBox";
import { UncleHashBox } from "./uncle/UncleHashBox";
import { UncleNumberBox } from "./uncle/UncleNumberBox";
import { AddressHashBox } from "./account/AddressHashBox";

storiesOf("boxes", module)
    .addParameters({
        info: {
            disable: true
        }
    })
    .add("default", () => <>
        <LayoutSection>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Account hash</Label>
                    <AddressHashBox Icon={ContractIcon}>0xffddeeccbbaabbccddeeff</AddressHashBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Mined blocks</Label>
                    <AccountMinedBlocksBox locale="en-US">{2}</AccountMinedBlocksBox>
                </LayoutRowItem>
            </LayoutRow>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Other</Label>
                    <AccountAliasBox>Account alias</AccountAliasBox>
                    <AccountTypeBox>Account Type</AccountTypeBox>
                    <MinerLabelBox>Miner label</MinerLabelBox>
                </LayoutRowItem>
            </LayoutRow>
        </LayoutSection>
        <LayoutSection>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Block hash</Label>
                    <BlockHashBox>0xffaabbccddeeffaabbcc</BlockHashBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Block number</Label>
                    <BlockNumberBox>{600000}</BlockNumberBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Parent hash</Label>
                    <ParentHashBox>0xffaabbccddeeffaabbcc</ParentHashBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Transactions</Label>
                    <TxCountBox>{6}</TxCountBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Uncles</Label>
                    <UnclesCountBox locale="en-US">{2}</UnclesCountBox>
                </LayoutRowItem>
            </LayoutRow>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Other</Label>
                    <BlockSizeBox bytes={20000} locale="en-US" translations={{bytes: "bytes"}} />
                </LayoutRowItem>
            </LayoutRow>
        </LayoutSection>
        <LayoutSection>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Tx hash</Label>
                    <TxHashBox>0xffaabbccddeeffaabbccddeeff</TxHashBox>
                    <TxTypeBox>Tx Type</TxTypeBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Time in pool</Label>
                    <TimeInPoolBox seconds={20} translation="%d seconds" />
                </LayoutRowItem>
            </LayoutRow>
        </LayoutSection>
        <LayoutSection>
            <LayoutRow>
                <LayoutRowItem>
                    <Label>Uncle hash</Label>
                    <UncleHashBox>0xffaabbccddeeffaabbccddeeff</UncleHashBox>
                </LayoutRowItem>
                <LayoutRowItem>
                    <Label>Uncle number</Label>
                    <UncleNumberBox>{600000}</UncleNumberBox>
                </LayoutRowItem>
            </LayoutRow>
        </LayoutSection>
    </>);
