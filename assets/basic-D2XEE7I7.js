import"./modulepreload-polyfill-B5Qt9EMX.js";const $=50,E=5,f=0,O=.2,B=.05,T="p1",I="p2",C="p3",D="p4",q="p5",V=[{id:T,name:"버그 없애는 키보드",discountValue:1e4,originalValue:1e4,quantity:50,onSale:!1,suggestSale:!1},{id:I,name:"생산성 폭발 마우스",discountValue:2e4,originalVal:2e4,quantity:30,onSale:!1,suggestSale:!1},{id:C,name:"거북목 탈출 모니터암",discountValue:3e4,originalVal:3e4,quantity:20,onSale:!1,suggestSale:!1},{id:D,name:"에러 방지 노트북 파우치",discountValue:15e3,originalVal:15e3,quantity:0,onSale:!1,suggestSale:!1},{id:q,name:"코딩할 때 듣는 Lo-Fi 스피커",discountValue:25e3,originalVal:25e3,quantity:10,onSale:!1,suggestSale:!1}];class b{static#e;#t=[];constructor(){if(b.#e)return b.#e;b.#e=this}setProducts(t){this.#t=t}changeQuantity(t,a){const n=this.#t.find(o=>o.id===t);if(!n)throw new Error(`Product with id "${t}" not found`);const s=n.quantity+a;s>=0&&(n.quantity=s)}getProducts(){return this.#t}getProductCount(){return this.#t.length}getProductById(t){const a=this.#t.find(n=>n.id===t);if(!a)throw Error("해당하는 상품이 없습니다.");return a}getProductAt(t){if(t<0||t>=this.#t.length)throw new RangeError(`index ${t} is out of bounds (0 ~ ${this.#t.length-1})`);return this.#t[t]}getTotalStock(){if(!this.#t)throw Error();return this.#t.reduce((t,a)=>t+a.quantity,0)}isLowTotalStock(){return this.getTotalStock()<$}getLowStockMessages(){return this.#t.filter(t=>t.quantity<E).map(t=>t.quantity>f?`${t.name}: 재고 부족 (${t.quantity}개 남음)`:`${t.name}: 품절`).join(`
`)}getLowStockProducts(){return this.#t.filter(t=>f<t.quantity&&t.quantity<E)}getOptionMessage(t){const a=`${t.name} - ${t.discountValue}원`;if(t.quantity===f){const n=t.onSale?" ⚡SALE":t.suggestSale?" 💝추천":"";return`${a} (품절)${n}`}return t.onSale&&t.suggestSale?`⚡💝 ${a} (25% SUPER SALE!)`:t.onSale?`⚡ ${t.name} - ${t.originalVal}원 → ${t.discountValue}원 (20% SALE!)`:t.suggestSale?`💝 ${t.name} - ${t.originalVal}원 → ${t.discountValue}원 (5% 추천할인!)`:a}getProductOptions(){return this.#t.map(t=>({id:t.id,message:this.getOptionMessage(t),disabled:t.quantity===f}))}}const u=new b,m=({elementType:e,className:t,innerHtml:a,...n})=>{const s=document.createElement(e);return s.className=t,s.innerHTML=a,s},H=()=>m({elementType:"div",className:"mb-8",innerHtml:`
    <h1 class="text-xs font-medium tracking-extra-wide uppercase mb-2">🛒 Hanghae Online Store</h1>
    <div class="text-5xl tracking-tight leading-none">Shopping Cart</div>
    <p id="item-count" class="text-sm text-gray-500 font-normal mt-3">🛍️ 0 items in cart</p>
  `}),A=()=>m({elementType:"div",className:"grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 flex-1 overflow-hidden"}),N=()=>m({elementType:"div",className:"mb-6 pb-6 border-b border-gray-200"}),Q=()=>{const e=m({elementType:"select",className:"w-full p-3 border border-gray-300 rounded-lg text-base mb-3"});return e.id="product-select",e},R=({value:e,message:t,disabled:a})=>{const n=m({elementType:"option"});return n.value=e,n.textContent=t,n.disabled=!!a,n},_=()=>m({elementType:"div",className:"bg-white border border-gray-200 p-8 overflow-y-auto"}),j=()=>m({elementType:"div",className:"bg-black text-white p-8 flex flex-col",innerHtml:`
    <h2 class="text-xs font-medium mb-5 tracking-extra-wide uppercase">Order Summary</h2>
    <div class="flex-1 flex flex-col">
      <div id="summary-details" class="space-y-3"></div>
      <div class="mt-auto">
        <div id="discount-info" class="mb-4"></div>
        <div id="cart-total" class="pt-5 border-t border-white/10">
          <div class="flex justify-between items-baseline">
            <span class="text-sm uppercase tracking-wider">Total</span>
            <div class="text-2xl tracking-tight">₩0</div>
          </div>
          <div id="loyalty-points" class="text-xs text-blue-400 mt-2 text-right">적립 포인트: 0p</div>
        </div>
        <div id="tuesday-special" class="mt-4 p-3 bg-white/10 rounded-lg hidden">
          <div class="flex items-center gap-2">
            <span class="text-2xs">🎉</span>
            <span class="text-xs uppercase tracking-wide">Tuesday Special 10% Applied</span>
          </div>
        </div>
      </div>
    </div>
    <button class="w-full py-4 bg-white text-black text-sm font-normal uppercase tracking-super-wide cursor-pointer mt-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30">
      Proceed to Checkout
    </button>
    <p class="mt-4 text-2xs text-white/60 text-center leading-relaxed">
      Free shipping on all orders.<br>
      <span id="points-notice">Earn loyalty points with purchase.</span>
    </p>
  `}),U=()=>m({elementType:"button",className:"fixed top-4 right-4 bg-black text-white p-3 rounded-full hover:bg-gray-900 transition-colors z-50",innerHtml:`
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  `}),F=()=>m({elementType:"div",className:"fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300"}),G=()=>m({elementType:"div",className:"fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50 transform translate-x-full transition-transform duration-300",innerHtml:`
    <button class="absolute top-4 right-4 text-gray-500 hover:text-black" onclick="document.querySelector('.fixed.inset-0').classList.add('hidden'); this.parentElement.classList.add('translate-x-full')">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <h2 class="text-xl font-bold mb-4">📖 이용 안내</h2>
    <div class="mb-6">
      <h3 class="text-base font-bold mb-3">💰 할인 정책</h3>
      <div class="space-y-3">
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">개별 상품</p>
          <p class="text-gray-700 text-xs pl-2">
            • 키보드 10개↑: 10%<br>
            • 마우스 10개↑: 15%<br>
            • 모니터암 10개↑: 20%<br>
            • 스피커 10개↑: 25%
          </p>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">전체 수량</p>
          <p class="text-gray-700 text-xs pl-2">• 30개 이상: 25%</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">특별 할인</p>
          <p class="text-gray-700 text-xs pl-2">
            • 화요일: +10%<br>
            • ⚡번개세일: 20%<br>
            • 💝추천할인: 5%
          </p>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <h3 class="text-base font-bold mb-3">🎁 포인트 적립</h3>
      <div class="space-y-3">
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">기본</p>
          <p class="text-gray-700 text-xs pl-2">• 구매액의 0.1%</p>
        </div>
        <div class="bg-gray-100 rounded-lg p-3">
          <p class="font-semibold text-sm mb-1">추가</p>
          <p class="text-gray-700 text-xs pl-2">
            • 화요일: 2배<br>
            • 키보드+마우스: +50p<br>
            • 풀세트: +100p<br>
            • 10개↑: +20p / 20개↑: +50p / 30개↑: +100p
          </p>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 pt-4 mt-4">
      <p class="text-xs font-bold mb-1">💡 TIP</p>
      <p class="text-2xs text-gray-600 leading-relaxed">
        • 화요일 대량구매 = MAX 혜택<br>
        • ⚡+💝 중복 가능<br>
        • 상품4 = 품절
      </p>
    </div>
  `}),z=()=>{const e=m({elementType:"button",className:"w-full py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-all",innerHtml:"Add to Cart"});return e.id="add-to-cart",e},K=()=>{const e=m({elementType:"div",className:"text-xs text-red-500 mt-3 whitespace-pre-line"});return e.id="stock-status",e},W=()=>{const e=m({elementType:"div"});return e.id="cart-items",e},c={productSelector:null,addCartButton:null,cartDisplay:null,stockInfo:null,cartSummary:null},X=({options:e,isLowTotalStock:t})=>{if(!c.productSelector)throw Error("[UI 요소 누락] globalElements의 productSelector가 초기화되지 않았습니다. renderLayout() 이후에 호출해주세요.");c.productSelector.innerHTML="",e.forEach(a=>{const n=R({...a,value:a.id});c.productSelector.appendChild(n)}),c.productSelector.style.borderColor=t?"orange":""},v=()=>{const e=u.getProductOptions(),t=u.isLowTotalStock();X({options:e,isLowTotalStock:t})},g=(()=>{let e={},t;const a=i=>{if(!e[i])throw Error("doesnt exist");return e[i]},n=()=>Object.entries(e).map(([i,d])=>({productId:i,quantity:d})),s=(i,d=1)=>{e[i]||(e[i]=0),e[i]+=d,t=i},o=i=>{delete e[i]};return{getQuantityByProductId:a,getItems:n,addItem:s,removeItem:o,changeQuantity:(i,d)=>{if(!e[i])throw Error("기존에 카트에 담겨있지 않은 상품입니다.");const y=e[i]+d;y<=0?o(i):e[i]=y},clear:()=>{e={},t=null},getTotalItem:()=>Object.values(e).reduce((i,d)=>i+d,0),getLastAddedItem:()=>t}})(),M=10,S=30,J=(e,t,a=new Date)=>{let n=0;const s=[],o=Math.floor(t/1e3);o>0&&(n=o,s.push(`기본: ${o}p`)),a.getDay()===2&&o>0&&(n=o*2,s.push("화요일 2배"));const r=e.map(d=>d.productId),l=r.includes(T),p=r.includes(I),h=r.includes(C);l&&p&&(n+=50,s.push("키보드+마우스 세트 +50p")),l&&p&&h&&(n+=100,s.push("풀세트 구매 +100p"));const i=e.reduce((d,y)=>d+y.quantity,0);return i>=S?(n+=100,s.push("대량구매(30개+) +100p")):i>=20?(n+=50,s.push("대량구매(20개+) +50p")):i>=10&&(n+=20,s.push("대량구매(10개+) +20p")),{total:n,detail:s}};function Y(e,t){const a=document.getElementById("loyalty-points");a&&(e>0?a.innerHTML=`<div>적립 포인트: <span class="font-bold">${e}p</span></div><div class="text-2xs opacity-70 mt-1">${t.join(", ")}</div>`:a.textContent="적립 포인트: 0p",a.style.display="block")}const k=()=>new Date().getDay()===2,Z=()=>g.getItems().reduce((e,{productId:t,quantity:a})=>{const n=u.getProductById(t),s=n.discountValue*a;let o=0;if(a>=M)switch(t){case T:o=.1;break;case I:o=.15;break;case C:o=.2;break;case D:o=.05;break;case q:o=.25;break}return o>0&&e.appliedItemDiscounts.push({name:n.name,discount:o*100}),e.subTotal+=s,e.totalAfterItemDiscount+=s*(1-o),e},{subTotal:0,totalAfterItemDiscount:0,appliedItemDiscounts:[]}),tt=({subTotal:e,totalAfterItemDiscount:t,appliedItemDiscounts:a})=>{const n=g.getTotalItem();let s=t,o=e===0?0:(e-s)/e;return n>=S&&(s=e*.75,o=.25),k()&&s>0&&(s=s*.9,o=e===0?0:1-s/e),s=Math.round(s),o=Math.round(o*100)/100,{finalTotal:s,finalDiscountRate:o,itemDiscounts:n>=S?[]:a}},et=({getQuantityById:e})=>{const t=c.cartDisplay.children;for(const a of t)a.querySelectorAll(".text-lg, .text-xs").forEach(function(s){s.classList.contains("text-lg")&&(s.style.fontWeight=e(a.id)>=M?"bold":"normal")})},nt=()=>{document.getElementById("tuesday-special").classList.toggle("hidden",!k())},at=({getProductById:e,getTotalItem:t,subTotal:a,appliedItemDiscounts:n,totalAmount:s})=>{const o=c.cartDisplay.children,r=document.getElementById("summary-details");r.innerHTML="";try{for(let l=0;l<o.length;l++){const p=e(o[l].id),h=o[l].querySelector(".quantity-number"),i=parseInt(h.textContent),d=p.discountValue*i;r.innerHTML+=`
        <div class="flex justify-between text-xs tracking-wide text-gray-400">
          <span>${p.name} x ${i}</span>
          <span>₩${d.toLocaleString()}</span>
        </div>
      `}}catch(l){console.error(l.message);return}r.innerHTML+=`
      <div class="border-t border-white/10 my-3"></div>
      <div class="flex justify-between text-sm tracking-wide">
        <span>Subtotal</span>
        <span>₩${a.toLocaleString()}</span>
      </div>
    `,t()>=S?r.innerHTML+=`
        <div class="flex justify-between text-sm tracking-wide text-green-400">
          <span class="text-xs">🎉 대량구매 할인 (30개 이상)</span>
          <span class="text-xs">-25%</span>
        </div>
      `:n.length>0&&n.forEach(function(l){r.innerHTML+=`
          <div class="flex justify-between text-sm tracking-wide text-green-400">
            <span class="text-xs">${l.name} (10개↑)</span>
            <span class="text-xs">-${l.discount}%</span>
          </div>
        `}),k()&&s>0&&(r.innerHTML+=`
          <div class="flex justify-between text-sm tracking-wide text-purple-400">
            <span class="text-xs">🌟 화요일 추가 할인</span>
            <span class="text-xs">-10%</span>
          </div>
        `),r.innerHTML+=`
      <div class="flex justify-between text-sm tracking-wide text-gray-400">
        <span>Shipping</span>
        <span>Free</span>
      </div>
    `},st=({finalDiscountRate:e,originalTotal:t,totalAmount:a})=>{const n=document.getElementById("discount-info");if(n.innerHTML="",e>0&&a>0){const s=t-a;n.innerHTML=`
      <div class="bg-green-500/20 rounded-lg p-3">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs uppercase tracking-wide text-green-400">총 할인율</span>
          <span class="text-sm font-medium text-green-400">${(e*100).toFixed(1)}%</span>
        </div>
        <div class="text-2xs text-gray-300">₩${Math.round(s).toLocaleString()} 할인되었습니다</div>
      </div>
    `}},ot=({totalAmount:e})=>{const t=c.cartSummary.querySelector(".text-2xl");t&&(t.textContent="₩"+Math.round(e).toLocaleString());const a=document.getElementById("loyalty-points");if(a){const n=Math.floor(e/1e3);a.textContent=`적립 포인트: ${n}p`,a.style.display="block"}},it=({totalCount:e})=>{const t=document.getElementById("item-count");if(t){const a=parseInt(t.textContent.match(/\d+/)||0);t.textContent="🛍️ "+e+" items in cart",a!==e&&t.setAttribute("data-changed","true")}},lt=({finalPrice:e})=>{const t=c.cartSummary.querySelector(".text-2xl");t&&(t.textContent="₩"+Math.round(e).toLocaleString())},rt=()=>{const e=document.getElementById("app"),t=H(),a=A(),n=_(),s=j(),o=N(),r=Q(),l=z(),p=K(),h=W(),i=s.querySelector("#cart-total"),d=U(),y=F(),L=G();return ct({toggleButton:d,overlay:y,column:L}),o.appendChild(r),o.appendChild(l),o.appendChild(p),n.appendChild(o),n.appendChild(h),a.appendChild(n),a.appendChild(s),y.appendChild(L),e.appendChild(t),e.appendChild(a),e.appendChild(d),e.appendChild(y),{productSelector:r,addCartButton:l,stockInfo:p,cartDisplay:h,cartSummary:i}};function ct({toggleButton:e,overlay:t,column:a}){e.onclick=()=>{t.classList.toggle("hidden"),a.classList.toggle("translate-x-full")},t.onclick=n=>{n.target===t&&(t.classList.add("hidden"),a.classList.add("translate-x-full"))}}let x=0;const dt=()=>{u.setProducts(V)};function ut(){const e=Math.random()*1e4,t=rt();c.productSelector=t.productSelector,c.addCartButton=t.addCartButton,c.cartDisplay=t.cartDisplay,c.stockInfo=t.stockInfo,c.cartSummary=t.cartSummary,dt(),v(),w(),setTimeout(()=>{setInterval(()=>{const a=Math.floor(Math.random()*u.getProductCount()),n=u.getProductAt(a);n.quantity>f&&!n.onSale&&(n.discountValue=Math.round(n.originalVal*(1-O)),n.onSale=!0,alert(`⚡번개세일! ${n.name}이(가) 20% 할인 중입니다!`),v(),P())},3e4)},e),setTimeout(()=>{setInterval(()=>{if(g.getLastAddedItem()){const a=u.getProducts().find(n=>n.id!==g.getLastAddedItem()&&n.quantity>f);a&&(alert(`💝  ${a.name}은(는) 어떠세요? 지금 구매하시면 5% 추가 할인!`),a.discountValue=Math.round(a.discountValue*(1-B)),a.suggestSale=!0,v(),P())}},6e4)},Math.random()*2e4)}function w(){let e;const{subTotal:t,totalAfterItemDiscount:a,appliedItemDiscounts:n}=Z();x=a;const{finalTotal:s,finalDiscountRate:o}=tt({subTotal:t,totalAfterItemDiscount:a,appliedItemDiscounts:n});x=s,et({getQuantityById:g.getQuantityByProductId}),nt(),t>0&&at({getProductById:u.getProductById,getTotalItem:g.getTotalItem,appliedItemDiscounts:n,subTotal:t,totalAmount:x}),lt({finalPrice:x}),ot({totalAmount:x}),st({finalDiscountRate:o,originalTotal:e,totalAmount:x}),it({totalCount:g.getTotalItem()}),gt(),pt()}const pt=()=>{if(c.cartDisplay.children.length===0){document.getElementById("loyalty-points").style.display="none";return}const{total:e,detail:t}=J(g.getItems(),x);Y(e,t)},gt=()=>{const e=u.getLowStockMessages();c.stockInfo.textContent=e};function P(){const e=c.cartDisplay.children;for(let t=0;t<e.length;t++){const a=e[t].id,n=u.getProductById(a);if(n){const s=e[t].querySelector(".text-lg"),o=e[t].querySelector("h3");let r="",l="";const p=n.originalVal!==n.discountValue;n.onSale&&n.suggestSale?(r="⚡💝",l="text-purple-600"):n.onSale?(r="⚡",l="text-red-500"):n.suggestSale&&(r="💝",l="text-blue-500"),o.textContent=`${r}${n.name}`,p?s.innerHTML=`
    <span class="line-through text-gray-400">₩${n.originalVal.toLocaleString()}</span>
    <span class="${l}">₩${n.discountValue.toLocaleString()}</span>
  `:s.textContent=`₩${n.discountValue.toLocaleString()}`}}w()}ut();c.addCartButton.addEventListener("click",function(){const e=c.productSelector.value,t=u.getProducts().find(a=>a.id===e);if(!(!e||!t)&&t&&t.quantity>0){const a=document.getElementById(t.id);if(a){const n=a.querySelector(".quantity-number"),s=parseInt(n.textContent)+1;s<=t.quantity+parseInt(n.textContent)?(g.changeQuantity(t.id,1),u.changeQuantity(t.id,-1),n.textContent=s):alert("재고가 부족합니다.")}else{g.addItem(t.id),u.changeQuantity(t.id,-1);const n=document.createElement("div");n.id=t.id,n.className="grid grid-cols-[80px_1fr_auto] gap-5 py-5 border-b border-gray-100 first:pt-0 last:border-b-0 last:pb-0",n.innerHTML=`
        <div class="w-20 h-20 bg-gradient-black relative overflow-hidden">
          <div class="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-white/10 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        </div>
        <div>
          <h3 class="text-base font-normal mb-1 tracking-tight">${t.onSale&&t.suggestSale?"⚡💝":t.onSale?"⚡":t.suggestSale?"💝":""}${t.name}</h3>
          <p class="text-xs text-gray-500 mb-0.5 tracking-wide">PRODUCT</p>
          <p class="text-xs text-black mb-3">${t.onSale||t.suggestSale?'<span class="line-through text-gray-400">₩'+t.originalVal.toLocaleString()+'</span> <span class="'+(t.onSale&&t.suggestSale?"text-purple-600":t.onSale?"text-red-500":"text-blue-500")+'">₩'+t.discountValue.toLocaleString()+"</span>":"₩"+t.discountValue.toLocaleString()}</p>
          <div class="flex items-center gap-4">
            <button class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white" data-product-id="${t.id}" data-change="-1">−</button>
            <span class="quantity-number text-sm font-normal min-w-[20px] text-center tabular-nums">1</span>
            <button class="quantity-change w-6 h-6 border border-black bg-white text-sm flex items-center justify-center transition-all hover:bg-black hover:text-white" data-product-id="${t.id}" data-change="1">+</button>
          </div>
        </div>
        <div class="text-right">
          <div class="text-lg mb-2 tracking-tight tabular-nums">${t.onSale||t.suggestSale?'<span class="line-through text-gray-400">₩'+t.originalVal.toLocaleString()+'</span> <span class="'+(t.onSale&&t.suggestSale?"text-purple-600":t.onSale?"text-red-500":"text-blue-500")+'">₩'+t.discountValue.toLocaleString()+"</span>":"₩"+t.discountValue.toLocaleString()}</div>
          <a class="remove-item text-2xs text-gray-500 uppercase tracking-wider cursor-pointer transition-colors border-b border-transparent hover:text-black hover:border-black" data-product-id="${t.id}">Remove</a>
        </div>
      `,c.cartDisplay.appendChild(n)}w()}});c.cartDisplay.addEventListener("click",function(e){const t=e.target;if(t.classList.contains("quantity-change")||t.classList.contains("remove-item")){const a=t.dataset.productId,n=document.getElementById(a),s=n.querySelector(".quantity-number"),o=u.getProductById(a);if(t.classList.contains("quantity-change")){const r=parseInt(t.dataset.change),l=g.getQuantityByProductId(a),p=l+r;p>0&&p<=o.quantity+l?(s.textContent=p,g.changeQuantity(a,1),u.changeQuantity(a,-1)):p<=0?(n.remove(),g.removeItem(a),u.changeQuantity(a,l)):alert("재고가 부족합니다.")}else if(t.classList.contains("remove-item")){const r=g.getQuantityByProductId(a);g.removeItem(a),u.changeQuantity(a,r),n.remove()}w(),v()}});
