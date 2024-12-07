import{r as p,u as F,j as e}from"./index-RnadGKpr.js";import{u as f}from"./ReactToastify-uMSh7ZjX.js";import{A as b,I as h}from"./index-Dvrz7xQh.js";import{Q as g,B as o}from"./react-toastify.esm-EMFeIvPm.js";import{u as j}from"./authStore-C0aLm_F4.js";import"./iconBase-BVq9QT-B.js";import"./clsx-B-dksMZM.js";import"./axios-Bmm4lkOe.js";const E=()=>{const{register:t,handleSubmit:n,reset:c}=f(),[r,x]=p.useState(!1),i=F(),{signup:d,isLoading:a,error:l}=j(),u=async m=>{try{const s=await d(m);s&&(console.log("Signup successful",s),o.success("Signup successful!"),c(),i("/addbusiness"))}catch(s){o.error(l),console.error(s)}};return e.jsxs("div",{className:"flex flex-col min-h-screen bg-[#FAFAFA]",children:[e.jsx(g,{}),e.jsxs("div",{className:"flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto text-center",children:[e.jsx("h1",{className:"text-[32px] font-[500] leading-[48px]",children:"Analyze. Improve. Thrive."}),e.jsx("p",{className:"text-[16px] font-normal leading-[24px]",children:"Sign up and discover your growth potential!"}),e.jsxs("form",{onSubmit:n(u),className:"mt-[40px] w-full",children:[e.jsxs("div",{className:"relative mb-[30px]",children:[e.jsx("label",{htmlFor:"business_listing_price",className:"absolute left-[18px] top-[-10px] px-1 bg-[#f5f5ff] rounded text-[#3B37FF] text-[14px] z-10",children:"Name"}),e.jsx("input",{type:"text",...t("name",{required:!0}),className:"w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-lg focus:outline-none bg-[#8F8F8F0D]/5"})]}),e.jsxs("div",{className:"relative mb-[30px]",children:[e.jsx("label",{htmlFor:"business_listing_price",className:"absolute left-[18px] top-[-10px] px-1 bg-[#f5f5ff] rounded text-[#3B37FF] text-[14px] z-10",children:"Email"}),e.jsx("input",{type:"email",...t("email",{required:!0}),className:"w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-lg focus:outline-none bg-[#8F8F8F0D]/5"})]}),e.jsxs("div",{className:"relative mb-[18px]",children:[e.jsx("label",{htmlFor:"business_listing_price",className:"absolute left-[18px] top-[-10px] px-1 bg-[#f5f5ff] rounded text-[#3B37FF] text-[14px] z-10",children:"Password"}),e.jsx("input",{type:r?"text":"password",...t("password",{required:!0}),className:"w-full px-5 py-3 border border-[#8F8F8F40]/25 rounded-lg focus:outline-none bg-[#8F8F8F0D]/5"}),e.jsx("span",{className:"absolute inset-y-0 right-3 flex items-center cursor-pointer",onClick:()=>x(!r),children:r?e.jsx(b,{color:"#8F8F8F",size:24}):e.jsx(h,{color:"#8F8F8F",size:24})})]}),e.jsxs("div",{className:"flex items-center mb-[30px]",children:[e.jsx("input",{type:"checkbox",className:"mr-2"}),e.jsx("label",{className:"text-sm text-[#3B37FF]",children:"Save Password"})]}),e.jsx("button",{type:"submit",className:"w-full py-3 bg-[#3B37FF] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors",disabled:a,children:a?"Signing up...":"Get started"}),l&&e.jsx("p",{className:"text-red-500 mt-4",children:l}),e.jsx("div",{className:"mt-8",children:e.jsxs("p",{className:"text-[16px]",children:[e.jsx("span",{className:"text-[#8F8F8F]",children:"Already have an account?"}),e.jsx("span",{onClick:()=>i("/login"),className:"text-[#3B37FF] hover:underline cursor-pointer",children:"Login"})]})})]})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-center text-[#8F8F8F] text-sm font-medium",children:"© 2024 Business Evaluation Tool"})})]})};export{E as default};
