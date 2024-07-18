import{o as e,c as h,k as l,q as k,s as p,A as t,e as s,a9 as i}from"./modules/vue-acKFYeAC.js";import{I as r}from"./slidev/default-CltyX-RE.js";import{u as d,f as o}from"./slidev/context-CyrgaRxZ.js";import"./index-BnUsXlDE.js";import"./modules/shiki-DCBpboPS.js";const c=s("h2",null,"Interactive Workflow With User Input (continued)",-1),g=s("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-yaml"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," name"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," Install dependencies")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"      run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," 'python -m pip install --upgrade pip")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"        '")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," id"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," systems")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"      run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},` echo "systems=$(echo '\${{ github.event.inputs.job }}' | cut -d ' ' -f1 )" >> $GITHUB_OUTPUT`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," id"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," originDB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"      run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},` echo "originDB=$(echo '\${{ github.event.inputs.job }}' | cut -d ' ' -f3 )" >> $GITHUB_OUTPUT`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," id"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," destinationDB")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"      run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},` echo "destinationDB=$(echo '\${{ github.event.inputs.job }}' | cut -d ' ' -f5 )" >> $GITHUB_OUTPUT`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"    -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," id"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," OriginDBPWName")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"      run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},` echo "OriginDBPWName=\${{ format('POSTGRES_DB_{0}_KEY', steps.originDB.outputs.originDB) }}"`),s("span",{style:{"--shiki-dark":"#DBD7CA","--shiki-light":"#393A34"}}," ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"        >"),s("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"> $GITHUB_OUTPUT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    - id: DestinationDBPWName")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},`      run: echo "DestinationDBPWName=\${{ format('POSTGRES_DB_{0}_KEY', steps.destinationDB.outputs.destinationDB) }}" `)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"        >> $GITHUB_OUTPUT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    - name: execute py script")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'      run: python main.py -p ${{ steps.systems.outputs.systems }} -opw "${{ secrets[steps.OriginDBPWName.outputs.OriginDBPWName]')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'        }}" -dpw "${{ secrets[steps.DestinationDBPWName.outputs.DestinationDBPWName]')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'        }}" -f')])])],-1),B={__name:"slides.md__slidev_7",setup(y){const{$slidev:D,$nav:u,$clicksContext:a,$clicks:m,$page:A,$renderContext:f,$frontmatter:n}=d();return a.setup(),(_,F)=>(e(),h(r,k(p(t(o)(t(n),6))),{default:l(()=>[c,g]),_:1},16))}},U=B;export{U as default};
