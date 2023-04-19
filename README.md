# vuelog

<div>
    <h3>Recap</h3>
    <ul>
        <li>컴포넌트 등록 및 사용방법
            <ul>
                <li>1. 파일생성</li>
                <li>2. 가져올 페이지에서 import [name] from '[파일위치]'</li>
                <li>3. components등록</li>
                <li>4. template안에 사용</li>
            </ul>
        </li>
        <li> js파일 등록 및 사용방법 
            <ul>
                <li>1. 내보내려는 파일에 export default</li>
                <li>2. 가져오려는 파일에 import [name] from '[파일위치]'</li>
                <li>3. data(){return {}} 안에 등록</li>
            </ul>      
        </li>
        <li>props 전송 방법
            <ul>
                <li>1. 보내기 :작명="데이터이름"</li>
                <li>2. 데이터 받을 페이지에서 props:{받은데이터명 : Array,Boolean,Number...} 등록</li>
                <li>3. 사용</li>
            </ul>
        </li>
        <li>vue-router 설치와 기본 라우팅
            <ul>
                <li>1. npm install vue-router@4 설치</li>
                <li>2. main.js에서 .use() 설정</li>
                <li>3. 보통 router 파일 따로 만들어서 import함 (src에 router.js 생성)</li>
                <li>4. App.vue 어디서 보여줄지 설정(props 전송은 router-view)</li>
                <li>5. router-link 이용해서 페이지 이동가능</li>
            </ul>
        </li>
        <li>상세페이지 만들기
            <ul>
                <li>1. router.js에 /:id 문법 사용(:아무문자)</li>
                <li>2. $route.params(url에 입력된 파라미터 가져옴).id 사용해서 id 가져오기</li>
            </ul>
        </li>
        <li>Nested routes 상세페이지 안에서 페이지 나누기 (UI가 간단할때)
            <ul>
                <li>1. children : [] 안에 path, component 추가</li>
            </ul>
        </li>
        <li>페이지 방문시 여러개 component를 보여주고 싶을때는 오브젝트 형식으로 만듦</li>
        <li>https://router.vuejs.org/guide/ 참고</li>
    </ul>
</div>

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
