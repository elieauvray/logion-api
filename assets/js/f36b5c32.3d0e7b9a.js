"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,f=d["".concat(l,".").concat(v)]||d[v]||p[v]||o;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(5773),r=n(808),o=(n(7378),n(5318)),c=["components"],i={},l="Protection",s={unversionedId:"client/protection",id:"client/protection",title:"Protection",description:"Protection Request",source:"@site/docs/client/protection.md",sourceDirName:"client",slug:"/client/protection",permalink:"/logion-api/docs/client/protection",draft:!1,editUrl:"https://github.com/logion-network/logion-api/tree/main/website/docs/client/protection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Balance and Transactions",permalink:"/logion-api/docs/client/balance-transactions"}},u={},p=[{value:"Protection Request",id:"protection-request",level:2},{value:"Choose legal officers",id:"choose-legal-officers",level:3},{value:"Request a protection",id:"request-a-protection",level:3},{value:"Activate the protection",id:"activate-the-protection",level:3},{value:"Vault",id:"vault",level:2},{value:"Transfer from vault",id:"transfer-from-vault",level:3},{value:"Transfer to vault",id:"transfer-to-vault",level:3},{value:"Check vault balance",id:"check-vault-balance",level:3},{value:"Recovery",id:"recovery",level:2},{value:"Request a recovery",id:"request-a-recovery",level:3},{value:"Activate the new protection",id:"activate-the-new-protection",level:3},{value:"Claim the recovery",id:"claim-the-recovery",level:3},{value:"Recover the lost balance",id:"recover-the-lost-balance",level:3},{value:"Recover the lost vault",id:"recover-the-lost-vault",level:3}],d={toc:p};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protection"},"Protection"),(0,o.kt)("h2",{id:"protection-request"},"Protection Request"),(0,o.kt)("h3",{id:"choose-legal-officers"},"Choose legal officers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const legalOfficers: LegalOfficer[] = authenticatedClient.getLegalOfficers();\n\nconst alice = legalOfficers[0];\nconst bob = legalOfficers[1];\n")),(0,o.kt)("h3",{id:"request-a-protection"},"Request a protection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const noProtection = await authenticatedClient.protectionState() as NoProtection;\nconst pending = await noProtection.requestProtection({\n    legalOfficer1: alice,\n    legalOfficer2: bob,\n    userIdentity: {\n        email: "john.doe@invalid.domain",\n        firstName: "John",\n        lastName: "Doe",\n        phoneNumber: "+1234",\n    },\n    postalAddress: {\n        city: "",\n        country: "",\n        line1: "",\n        line2: "",\n        postalCode: "",\n    }\n});\n')),(0,o.kt)("h3",{id:"activate-the-protection"},"Activate the protection"),(0,o.kt)("p",null,"You must first wait for both Legal Officers acceptance, and then activate the protection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const accepted = (await pending.refresh()) as AcceptedProtection;\n\naccepted.activate(signer);\n")),(0,o.kt)("h2",{id:"vault"},"Vault"),(0,o.kt)("p",null,"Operations require an activated protection (see above ",(0,o.kt)("a",{parentName:"p",href:"#protection-request"},"Protection Request"),")"),(0,o.kt)("h3",{id:"transfer-from-vault"},"Transfer from vault"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'let activeProtection = (await authenticatedClient.protectionState()) as ActiveProtection;\n\nlet vaultState = await activeProtection.vaultState();\nconst vaultAddress = vaultState.vaultAddress;\nvaultState = await vaultState.createVaultTransferRequest({\n    legalOfficer: alice,\n    amount: new PrefixedNumber("1", NONE),\n    destination: REQUESTER_ADDRESS,\n    signer\n});\nconst pendingRequest = vaultState.pendingVaultTransferRequests[0];\n')),(0,o.kt)("h3",{id:"transfer-to-vault"},"Transfer to vault"),(0,o.kt)("p",null,"A transfer to the vault is similar to any other ",(0,o.kt)("a",{parentName:"p",href:"balance-transactions#transfer-an-amount-to-another-account"},"transfer"),".\nSimply use ",(0,o.kt)("inlineCode",{parentName:"p"},"vaultState.vaultAddress")," as destination."),(0,o.kt)("h3",{id:"check-vault-balance"},"Check vault balance"),(0,o.kt)("p",null,"You must fist wait for one Legal Officer acceptance, and then see the effect of the transfer on the vault balance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'vaultState = await vaultState.refresh();\n\nconst balance = vaultState.balances[0];\nconsole.log("Balance :%s", `${balance.balance.coefficient.toInteger()}.${balance.balance.coefficient.toFixedPrecisionDecimals(2)}${balance.balance.prefix.symbol}`)\n')),(0,o.kt)("h2",{id:"recovery"},"Recovery"),(0,o.kt)("h3",{id:"request-a-recovery"},"Request a recovery"),(0,o.kt)("p",null,"Recovery must be requested to the ",(0,o.kt)("strong",{parentName:"p"},"same Legal Officers")," who accepted to protect the lost account (in this case, Alice and Bob)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const NEW_ADDRESS = "5GsxAu1XexDATCbDJbWxKSow4gdC6epkajZr7Ht8Ci9VZabV";\n\nconst authenticatedClient = await LogionClient.create({\n    rpcEndpoints: [ \'wss://rpc01.logion.network\' ], // A list of websocket endpoints\n    directoryEndpoint: \'https://directory.logion.network\' // A logion directory\n}).authenticate([ NEW_ADDRESS ], signer);\n\nconst noProtection = await authenticatedClient.protectionState() as NoProtection;\nconst pending = await noProtection.requestRecovery({\n    recoveredAddress: REQUESTER_ADDRESS,\n    signer,\n    legalOfficer1: alice,\n    legalOfficer2: bob,\n    userIdentity: {\n        email: "john.doe@invalid.domain",\n        firstName: "John",\n        lastName: "Doe",\n        phoneNumber: "+1234",\n    },\n    postalAddress: {\n        city: "",\n        country: "",\n        line1: "",\n        line2: "",\n        postalCode: "",\n    }\n});\n\n')),(0,o.kt)("h3",{id:"activate-the-new-protection"},"Activate the new protection"),(0,o.kt)("p",null,"You must first wait for LO's acceptance and vouching, and then activate the new protection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const accepted = (await pending.refresh()) as AcceptedProtection;\n\nlet pendingRecovery = await accepted.activate(signer) as PendingRecovery;\n")),(0,o.kt)("h3",{id:"claim-the-recovery"},"Claim the recovery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"pendingRecovery = await pendingRecovery.waitForFullyReady();\nconst claimed = await pendingRecovery.claimRecovery(signer);\n")),(0,o.kt)("h3",{id:"recover-the-lost-balance"},"Recover the lost balance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const recoveredBalance = await claimed.recoveredBalanceState();\nawait recoveredBalance.transfer({\n    signer,\n    destination: NEW_ADDRESS,\n    amount: recoveredBalance.balances[0].available,\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The destination may be any address, not necessarily the new account address.")),(0,o.kt)("h3",{id:"recover-the-lost-vault"},"Recover the lost vault"),(0,o.kt)("p",null,"As for any transfer from a vault, you must for one LO's approval."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const newVault = await claimed.vaultState();\nlet recoveredVault = await claimed.recoveredVaultState();\nrecoveredVault = await recoveredVault.createVaultTransferRequest({\n    legalOfficer: alice,\n    amount: recoveredVault.balances[0].available,\n    destination: newVault.vaultAddress,\n    signer,\n});\n\n// ... Wait for LO\'s acceptance ...\nnewVault = await newVault.refresh();\n\n// Check Vault balance\nconst newBalance = newVault.balances[0];\nconsole.log("Balance :%s", `${newBalance.balance.coefficient.toInteger()}.${newBalance.balance.coefficient.toFixedPrecisionDecimals(2)}${newBalance.balance.prefix.symbol}`);\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The destination may be any address, not necessarily the new vault address.")))}v.isMDXComponent=!0}}]);