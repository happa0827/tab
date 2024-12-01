(()=>{
//ここに命令を書く
const $doc = document;
const $tab = $doc.getElementById('js-tab')
const $nav = $tab.querySelectorAll('[data-nav]')
const $content = $tab.querySelectorAll('[data-content]')
const ACTIVE_CLASS = 'is-active';

const init = () => {
    $content[0].style.display = 'block';
};
init();

//クリックイベント
const handleClick = (e) => {
    e.preventDefault();
    console.log('Click!')
//クリックしたnavとそのデータを取得
    const $this = e.target;
    const targetval =$this.dataset.nav;

//対象外のnav,contentsすべて一旦リセット
let index2 = 0;
while(index2 < $nav.length){
    $content[index2].style.display = 'none';
    $nav[index2].classList.remove(ACTIVE_CLASS)
    index2++;
}

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetval + '"]')[0].style.display = 'block';
    $nav[targetval].classList.add(ACTIVE_CLASS)
};
//全nav要素に関数を適応・発火
let index1 = 0;
while(index1 < $nav.length){
    $nav[index1].addEventListener('click',(e) => handleClick(e));
    index1++;
}
})()