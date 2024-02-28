document.addEventListener("DOMContentLoaded", () => {

const steelOptions = [
    {
      steel: [
            { value: "7.8", label: "Ст3", selected: true },
            { value: "7.85", label: "10" },
            { value: "7.85", label: "20" },
            { value: "7.82", label: "40Х" },
            { value: "7.82", label: "45" },
            { value: "7.81", label: "65" },
            { value: "7.85", label: "65Г" },
            { value: "7.85", label: "09Г2С" },
            { value: "7.75", label: "15Х5М" },
            { value: "7.85", label: "10ХСНД" },
            { value: "7.8", label: "12Х1МФ" },
            { value: "7.81", label: "ШХ15" },
            { value: "8.3", label: "Р6М5" },
            { value: "7.83", label: "У7" },
            { value: "7.84", label: "У8" },
            { value: "7.83", label: "У8А" },
            { value: "7.81", label: "У10" },
            { value: "7.81", label: "У10А" },
            { value: "7.81", label: "У12А" },
            { value: "7.8", label: "Прочее" }
      ],
      stainlessSteel:[
            { value: "7.76", label: "08X17T", selected: true },
            { value: "7.67", label: "20X13" },
            { value: "7.67", label: "30X13" },
            { value: "7.65", label: "40Х13" },
            { value: "7.85", label: "08X18Н10" },
            { value: "7.9", label: "12Х18Н10Т" },
            { value: "7.9", label: "10Х17Н13М2Т" },
            { value: "7.96", label: "06ХН28МДТ" },
            { value: "7.9", label: "20Х23Н18" },
            { value: "7.85", label: "AISI 304" },
            { value: "7.8", label: "AISI 316l" },
            { value: "7.95", label: "AISI 316TI" },
            { value: "7.9", label: "AISI 321" },
            { value: "7.76", label: "AISI 409" },
            { value: "7.72", label: "AISI 430" },
            { value: "7.96", label: "AISI 904l" },
            { value: "7.9", label: "Прочее" }
      ],
      aluminum:[
            { value: "2.71", label: "А5", selected: true },
            { value: "2.71", label: "АД" },
            { value: "2.71", label: "АД1" },
            { value: "2.77", label: "АК4" },
            { value: "2.75", label: "АК6" },
            { value: "2.67", label: "АмГ" },
            { value: "2.73", label: "АМц" },
            { value: "2.85", label: "В95" },
            { value: "2.8", label: "Д1" },
            { value: "2.78", label: "Д16" },
            { value: "2.75", label: "Прочее" }
      ],
      cuprum:[
            { value: "8.91", label: "M1", selected: true },
            { value: "8.93", label: "М2" },
            { value: "8.93", label: "М3" },
            { value: "8.92", label: "Прочее" }
      ],
      brass:[
            { value: "8.44", label: "Л63", selected: true },
            { value: "8.6", label: "Л68" },
            { value: "8.5", label: "ЛЖМЦ59-1-1" },
            { value: "8.4", label: "ЛМц58-2" },
            { value: "8.45", label: "ЛС58-2" },
            { value: "8.45", label: "ЛС59-1" },
            { value: "8.5", label: "ЛС63-3" }
      ],
      bronze:[
            { value: "7.6", label: "БрАЖ9-4", selected: true },
            { value: "7.8", label: "БрАЖМц10-3-1,5" },
            { value: "7.5", label: "БрАЖН10-4-4" },
            { value: "7.6", label: "БрАМц9-2" },
            { value: "8.2", label: "БрБ2" },
            { value: "8.4", label: "БрКМЦ3-1" },
            { value: "7.8", label: "БрОФ7-0,2" },
            { value: "8.8", label: "БрОЦС5-5-5" },
            { value: "7.96", label: "Прочее" }
      ],
      titan:[
            { value: "4.505", label: "ВТ1-00", selected: true },
            { value: "4.505", label: "ВТ1-1" },
            { value: "4.43", label: "АТ-6" },
            { value: "4.52", label: "ВТ14" },
            { value: "4.45", label: "ВТ20" },
            { value: "4.6", label: "ВТ22" },
            { value: "4.5", label: "ВТ3-1" },
            { value: "4.4", label: "ВТ5" },
            { value: "4.46", label: "ВТ5-1" },
            { value: "4.43", label: "ВТ6" },
            { value: "4.55", label: "ОТ4-1" },
            { value: "4.49", label: "ПТ7М" },
            { value: "4.5", label: "Прочее" },
      ],
    }
  ];




/**
 * Добавление класса active элементу, по которому произошёл клик
 */
const nav = document.querySelectorAll('nav');
nav.forEach(item =>{
  item.addEventListener('click', (e)=>{
  let metall = e.target.closest('ul');
    for (let i = 0; i < metall.children.length; i++) {
        metall.children[i].classList.remove('active');
    }
  e.target.parentNode.classList.add("active");
    })
})



    const steel   = ['Арматура', 'Балка/двутавр', 'Квадрат', 'Круг/пруток', 'Лента', 'Лист/плита', 'Труба круглая', 'Труба профильная', 'Уголок',
                        'Швеллер', 'Шестигранник'];
    const nerz    = ['Квадрат', 'Круг/пруток', 'Лента', 'Лист/плита', 'Труба круглая', 'Труба профильная', 'Уголок', 'Швеллер', 'Шестигранник'];
    const alum    = ['Квадрат', 'Круг/пруток', 'Лента', 'Лист/плита', 'Труба круглая', 'Труба профильная', 'Уголок', 'Шестигранник'];
    const cuprum  = ['Круг/пруток', 'Лента', 'Лист/плита', 'Труба круглая'];
    const latun   = ['Круг/пруток', 'Лента', 'Лист/плита', 'Труба круглая', 'Шестигранник'];
    const bronza  = ['Круг/пруток', 'Лента', 'Лист/плита'];
    const titan   = ['Круг/пруток', 'Лента', 'Лист/плита', 'Труба круглая', 'Труба профильная'];
    const linkImg = ['img/Armature.png','img/Balk.png', 'img/Branch.png','img/ChannelP.png','img/Circle.png','img/Corner.png','img/Flange.png','img/Hexahedron.png','img/List.png',
                        'img/PipeCircle.png','img/PipeProf.png','img/Ribbon.png','img/Square.png',
                        ];
    const imgClass= ['shape-armature', 'shape-balk', 'shape-square', 'shape-circle', 'shape-ribbon', 'shape-list', 'shape-branch', 'shape-pipeCircle', 'shape-pipeProf',  'shape-corner',
                        'shape-flange', 'shape-channelp', 'shape-hexahedron'
                        ];
    
let formArmat = `
<div><div><label for="country">
  	<span class="field-label">Номинальный диаметр</span>
    <select class="width-100" name="d" data-region="options">
      
        <option value="6">6</option>
      
        <option value="8">8</option>
      
        <option value="10">10</option>
      
        <option value="12">12</option>
      
        <option value="14">14</option>
      
        <option value="16">16</option>
      
        <option value="18">18</option>
      
        <option value="20">20</option>
      
        <option value="22">22</option>
      
        <option value="25">25</option>
      
        <option value="28">28</option>
      
        <option value="32">32</option>
      
        <option value="36">36</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;  
let formBalka = `
<div><div><label for="country">
  	<span class="field-label">Тип балки</span>
    <select class="width-100" name="d" data-region="options">
      
        <option value="1">Гост 8239-89</option>
      
        <option value="2">Нормальный двутавр (Б)</option>
      
        <option value="3">Широкополочный двутавр (Ш)</option>
      
        <option value="4">Колонный двутавр (К)</option>
      
        <option value="5">Двутавр дополнительной серии (Д)</option>
      
        <option value="6">Сварной двутавр (С)</option>
      
    </select>
</label>
</div><div><label for="country">
  	<span class="field-label">Номер балки</span>
    <select class="width-100 numBalk" name="balk" data-region="options">
      
        <option value="8.7">10Б1</option>
      
        <option value="10.4">12Б1</option>
      
        <option value="10.37">12Б2</option>
      
        <option value="10.1">14Б1</option>
      
        <option value="12.9">14Б2</option>
      
        <option value="12.7">16Б1</option>
      
        <option value="15.8">16Б2</option>
      
        <option value="15.4">18Б1</option>
      
        <option value="18.8">18Б2</option>
      
        <option value="22.4">20Б1</option>
      
        <option value="25.8">23Б1</option>
      
        <option value="28">26Б1</option>
      
        <option value="31.2">26Б2</option>
      
        <option value="32.9">30Б1</option>
      
        <option value="36.6">30Б2</option>
      
        <option value="38.9">35Б1</option>
      
        <option value="43.3">35Б2</option>
      
        <option value="48.1">40Б1</option>
      
        <option value="54.7">40Б2</option>
      
        <option value="59.8">45Б1</option>
      
        <option value="67.5">45Б2</option>
      
        <option value="73">50Б1</option>
      
        <option value="80.7">50Б2</option>
      
        <option value="89">55Б1</option>
      
        <option value="97.9">55Б2</option>
      
        <option value="106.2">60Б1</option>
      
        <option value="115.6">60Б2</option>
      
        <option value="129.3">70Б1</option>
      
        <option value="144.2">70Б2</option>
      
        <option value="159.5">80Б1</option>
      
        <option value="177.9">80Б2</option>
      
        <option value="194">90Б1</option>
      
        <option value="213.8">90Б2</option>
      
        <option value="230.6">100Б1</option>
      
        <option value="258.2">100Б2</option>
      
        <option value="285.7">100Б3</option>
      
        <option value="314.5">100Б4</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formCube = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Сторона квадрата а</span>
	<input class="width-100 storona" name="a" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 width" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formCrug = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Диаметр круга D</span>
	<input class="width-100 dia" name="d" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 width" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formLenta = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Ширина ленты a</span>
	<input class="width-100 height" name="a" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Толщина ленты t</span>
	<input class="width-100 size" name="t" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 width" name="b" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formList = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Толщина листа t</span>
	<input class="width-100 size" name="t" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Ширина листа a</span>
	<input class="width-100 width" name="a" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина листа b</span>
	<input class="width-100 height" name="b" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Количество</span>
	<input class="width-100 count" name="n" type="text" placeholder="0">
  <span class="input-append">шт.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formotvod = `
<div><div><label for="country">
  	<span class="field-label">Исполнение</span>
    <select class="width-100" name="d" data-region="options">
      
        <option value="1">Исполнение 1</option>
      
        <option value="2" selected="">Исполнение 2</option>
      
    </select>
</label>
</div><div><label for="country">
  	<span class="field-label">Размер</span>
    <select class="width-100" name="s" data-region="options">
      
        <option value="43">32х2</option>
      
        <option value="44">32х2.5</option>
      
        <option value="45">32х3</option>
      
        <option value="46">32х3.5</option>
      
        <option value="47">38х2</option>
      
        <option value="48">38х2.5</option>
      
        <option value="49">38х3</option>
      
        <option value="50">38х3.5</option>
      
        <option value="51">38х4</option>
      
        <option value="52">45х2.5</option>
      
        <option value="53">45х3</option>
      
        <option value="54">45х3.5</option>
      
        <option value="55">45х4</option>
      
        <option value="56">45х5</option>
      
        <option value="57">57х2.5</option>
      
        <option value="58">57х3</option>
      
        <option value="59">57х3.5</option>
      
        <option value="60">57х4</option>
      
        <option value="61">57х4.5</option>
      
        <option value="62">57х5</option>
      
        <option value="63">57х5.5</option>
      
        <option value="64">57х6</option>
      
        <option value="65">76х3</option>
      
        <option value="66">76х3.5</option>
      
        <option value="67">76х4</option>
      
        <option value="68">76х4.5</option>
      
        <option value="69">76х5</option>
      
        <option value="70">76х5.53</option>
      
        <option value="71">76х6</option>
      
        <option value="72">76х7</option>
      
        <option value="73">76х8</option>
      
        <option value="74">89х3</option>
      
        <option value="75">89х3.5</option>
      
        <option value="76">89х4</option>
      
        <option value="77">89х4.5</option>
      
        <option value="78">89х5</option>
      
        <option value="79">89х5.5</option>
      
        <option value="80">89х6</option>
      
        <option value="81">89х7</option>
      
        <option value="82">89х8</option>
      
        <option value="83">102х3.5</option>
      
        <option value="84">102х4</option>
      
        <option value="85">102х4.5</option>
      
        <option value="86">102х5</option>
      
        <option value="87">102х6</option>
      
        <option value="88">102х7</option>
      
        <option value="89">102х8</option>
      
        <option value="90">102х9</option>
      
        <option value="91">102х10</option>
      
        <option value="92">108х10</option>
      
        <option value="93">108х4</option>
      
        <option value="94">108х4.5</option>
      
        <option value="95">108х5</option>
      
        <option value="96">108х6</option>
      
        <option value="97">108х7</option>
      
        <option value="98">108х8</option>
      
        <option value="99">108х9</option>
      
        <option value="100">108х10</option>
      
        <option value="101">114х3.5</option>
      
        <option value="102">114х3.5</option>
      
        <option value="103">114х4.5</option>
      
        <option value="104">114х5</option>
      
        <option value="105">114х6</option>
      
        <option value="106">114х7</option>
      
        <option value="107">114х8</option>
      
        <option value="108">114х9</option>
      
        <option value="109">114х10</option>
      
        <option value="110">133х3.5</option>
      
        <option value="111">133х4</option>
      
        <option value="112">133х4.5</option>
      
        <option value="113">133х5</option>
      
        <option value="114">133х6</option>
      
        <option value="115">133х7</option>
      
        <option value="116">133х85</option>
      
        <option value="117">133х9</option>
      
        <option value="118">133х10</option>
      
        <option value="119">133х11</option>
      
        <option value="120">133х12</option>
      
        <option value="121">159х4</option>
      
        <option value="122">159х4.5</option>
      
        <option value="123">159х5</option>
      
        <option value="124">159х6</option>
      
        <option value="125">159х7</option>
      
        <option value="126">159х8</option>
      
        <option value="127">159х9</option>
      
        <option value="128">159х10</option>
      
        <option value="129">159х11</option>
      
        <option value="130">159х12</option>
      
        <option value="131">159х13</option>
      
        <option value="132">159х14</option>
      
        <option value="133">168х4</option>
      
        <option value="134">168х4.5</option>
      
        <option value="135">168х5</option>
      
        <option value="136">168х6</option>
      
        <option value="137">168х7</option>
      
        <option value="138">168х8</option>
      
        <option value="139">168х9</option>
      
        <option value="140">168х10</option>
      
        <option value="141">168х11</option>
      
        <option value="142">168х12</option>
      
        <option value="143">168х13</option>
      
        <option value="144">168х14</option>
      
        <option value="145">219х5</option>
      
        <option value="146">219х6</option>
      
        <option value="147">219х7</option>
      
        <option value="148">219х8</option>
      
        <option value="149">219х9</option>
      
        <option value="150">219х10</option>
      
        <option value="151">219х11</option>
      
        <option value="152">219х12</option>
      
        <option value="153">219х13</option>
      
        <option value="154">219х14</option>
      
        <option value="155">219х15</option>
      
        <option value="156">219х16</option>
      
        <option value="157">219х17</option>
      
        <option value="158">219х18</option>
      
        <option value="159">273х6</option>
      
        <option value="160">273х7</option>
      
        <option value="161">273х8</option>
      
        <option value="162">273х9</option>
      
        <option value="163">273х10</option>
      
        <option value="164">273х11</option>
      
        <option value="165">273х12</option>
      
        <option value="166">273х13</option>
      
        <option value="167">273х14</option>
      
        <option value="168">273х15</option>
      
        <option value="169">273х16</option>
      
        <option value="170">273х17</option>
      
        <option value="171">273х18</option>
      
        <option value="172">273х20</option>
      
        <option value="173">273х22</option>
      
        <option value="174">325х7</option>
      
        <option value="175">325х8</option>
      
        <option value="176">325х9</option>
      
        <option value="177">325х10</option>
      
        <option value="178">325х11</option>
      
        <option value="179">325х12</option>
      
        <option value="180">32513</option>
      
        <option value="181">325х14</option>
      
        <option value="182">325х15</option>
      
        <option value="183">325х16</option>
      
        <option value="184">325х17</option>
      
        <option value="185">325х18</option>
      
        <option value="186">325х20</option>
      
        <option value="187">325х22</option>
      
        <option value="188">325х24</option>
      
        <option value="189">325х26</option>
      
        <option value="190">325х28</option>
      
        <option value="191">377х9</option>
      
        <option value="192">377х10</option>
      
        <option value="193">377х11</option>
      
        <option value="194">377х12</option>
      
        <option value="195">377х13</option>
      
        <option value="196">377х14</option>
      
        <option value="197">377х15</option>
      
        <option value="198">377х16</option>
      
        <option value="199">377х17</option>
      
        <option value="200">377х18</option>
      
        <option value="201">377х19</option>
      
        <option value="202">377х20</option>
      
        <option value="203">377х21</option>
      
        <option value="204">377х22</option>
      
        <option value="205">377х23</option>
      
        <option value="206">377х24</option>
      
        <option value="207">426х8</option>
      
        <option value="208">426х9</option>
      
        <option value="209">426х10</option>
      
        <option value="210">426х11</option>
      
        <option value="211">426х12</option>
      
        <option value="212">426х13</option>
      
        <option value="213">426х14</option>
      
        <option value="214">426х15</option>
      
        <option value="215">426х16</option>
      
        <option value="216">426х17</option>
      
        <option value="217">426х18</option>
      
        <option value="218">426х20</option>
      
        <option value="219">426х22</option>
      
        <option value="220">426х24</option>
      
        <option value="221">426х26</option>
      
        <option value="222">426х28</option>
      
        <option value="223">426х30</option>
      
        <option value="224">426х32</option>
      
        <option value="225">426х34</option>
      
        <option value="226">530х9</option>
      
        <option value="227">530х10</option>
      
        <option value="228">530х11</option>
      
        <option value="229">530х12</option>
      
        <option value="230">530х13</option>
      
        <option value="231">530х14</option>
      
        <option value="232">530х15</option>
      
        <option value="233">530х16</option>
      
        <option value="234">530х17</option>
      
        <option value="235">530х18</option>
      
        <option value="236">530х20</option>
      
        <option value="237">530х22</option>
      
        <option value="238">530х24</option>
      
        <option value="239">530х26</option>
      
        <option value="240">530х28</option>
      
        <option value="241">530х30</option>
      
        <option value="242">530х32</option>
      
        <option value="243">530х34</option>
      
        <option value="244">530х36</option>
      
        <option value="245">630х9</option>
      
        <option value="246">630х10</option>
      
        <option value="247">630х11</option>
      
        <option value="248">630х12</option>
      
        <option value="249">630х13</option>
      
        <option value="250">630х14</option>
      
        <option value="251">630х15</option>
      
        <option value="252">630х16</option>
      
        <option value="253">630х17</option>
      
        <option value="254">630х18</option>
      
        <option value="255">630х20</option>
      
        <option value="256">630х22</option>
      
        <option value="257">630х24</option>
      
        <option value="258">630х26</option>
      
        <option value="259">630х28</option>
      
        <option value="260">630х30</option>
      
        <option value="261">630х32</option>
      
        <option value="262">720х9</option>
      
        <option value="263">720х10</option>
      
        <option value="264">720х11</option>
      
        <option value="265">720х12</option>
      
        <option value="266">720х13</option>
      
        <option value="267">720х14</option>
      
        <option value="268">720х15</option>
      
        <option value="269">720х16</option>
      
        <option value="270">720х17</option>
      
        <option value="271">720х18</option>
      
        <option value="272">720х20</option>
      
        <option value="273">720х22</option>
      
        <option value="274">720х24</option>
      
        <option value="275">720х26</option>
      
        <option value="276">720х28</option>
      
        <option value="277">720х30</option>
      
        <option value="278">720х32</option>
      
        <option value="279">820х9</option>
      
        <option value="280">820х10</option>
      
        <option value="281">820х11</option>
      
        <option value="282">820х12</option>
      
        <option value="283">820х13</option>
      
        <option value="284">820х14</option>
      
        <option value="285">820х15</option>
      
        <option value="286">820х16</option>
      
        <option value="287">820х17</option>
      
        <option value="288">820х18</option>
      
        <option value="289">820х20</option>
      
        <option value="290">820х22</option>
      
        <option value="291">820х24</option>
      
        <option value="292">820х26</option>
      
        <option value="293">820×28</option>
      
        <option value="294">820×30</option>
      
        <option value="295">820×32</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Количество</span>
	<input class="width-100" name="n" type="text" placeholder="0">
  <span class="input-append">шт.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formTrubaKr = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Внешний диаметр трубы D</span>
	<input class="width-100 dia" name="d" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Толщина стенки t</span>
	<input class="width-100 width" name="t" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 length" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formTrubaPr = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Ширина трубы a</span>
	<input class="width-100 width" name="a" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Высота трубы b</span>
	<input class="width-100 height" name="b" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Толщина стенки t</span>
	<input class="width-100 size" name="t" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 length" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formUgol = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Ширина уголка a</span>
	<input class="width-100 a" name="a" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Высота уголка b</span>
	<input class="width-100 b" name="b" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Толщина полки t</span>
	<input class="width-100 t" name="t" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 l" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formFlan = `
<div><div><label for="country">
  	<span class="field-label">Давление</span>
    <select class="width-100" name="d" data-region="options">
      
        <option value="1">Ру 6</option>
      
        <option value="2">Ру 10</option>
      
        <option value="3">Ру 16</option>
      
        <option value="4">Ру 25</option>
      
    </select>
</label>
</div><div><label for="country">
  	<span class="field-label">Условный диаметр</span>
    <select class="width-100" name="flange" data-region="options">
      
        <option value="1">15</option>
      
        <option value="2">20</option>
      
        <option value="3">25</option>
      
        <option value="4">32</option>
      
        <option value="5">40</option>
      
        <option value="6">50</option>
      
        <option value="7">65</option>
      
        <option value="8">80</option>
      
        <option value="9">100</option>
      
        <option value="10">125</option>
      
        <option value="11">150</option>
      
        <option value="12">200</option>
      
        <option value="13">250</option>
      
        <option value="14">300</option>
      
        <option value="15">350</option>
      
        <option value="16">400</option>
      
        <option value="17">500</option>
      
        <option value="18">600</option>
      
        <option value="19">800</option>
      
        <option value="20">1000</option>
      
        <option value="21">1200</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Количество</span>
	<input class="width-100" name="n" type="text" placeholder="0">
  <span class="input-append">шт.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formShvel = `
<div><div><label for="country">
  	<span class="field-label">Номер швеллера</span>
    <select class="width-100" name="d" data-region="options">
      
        <option value="4.84">5П</option>
      
        <option value="4.84">5У</option>
      
        <option value="5.9">6,5П</option>
      
        <option value="5.9">6,5У</option>
      
        <option value="7.05">8П</option>
      
        <option value="7.05">8У</option>
      
        <option value="8.59">10П</option>
      
        <option value="8.59">10У</option>
      
        <option value="10.4">12П</option>
      
        <option value="10.4">12У</option>
      
        <option value="12.3">14П</option>
      
        <option value="12.3">14у</option>
      
        <option value="15.3">16аП</option>
      
        <option value="14.2">16П</option>
      
        <option value="14.2">16у</option>
      
        <option value="17.4">18аП</option>
      
        <option value="17.4">18аУ</option>
      
        <option value="16.3">18П</option>
      
        <option value="16.3">18у</option>
      
        <option value="18.4">20П</option>
      
        <option value="21">20У</option>
      
        <option value="18.4">20У</option>
      
        <option value="21">22П</option>
      
        <option value="24">24П</option>
      
        <option value="24">24У</option>
      
        <option value="27.7">27П</option>
      
        <option value="31.8">30П</option>
      
        <option value="31.8">30У</option>
      
        <option value="36.5">33П</option>
      
        <option value="36.5">33У</option>
      
        <option value="41.9">36П</option>
      
        <option value="41.9">36у</option>
      
        <option value="48.3">40П</option>
      
        <option value="48.3">40У</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 l" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;
let formShest = `
<div><div><label for="country">
  	<span class="field-label">Марка стали</span>
    <select class="width-100" name="p" data-region="options">
      
        <option value="7.8" selected="">Ст 3</option>
      
        <option value="7.85">10</option>
      
        <option value="7.85">20</option>
      
        <option value="7.82">40Х</option>
      
        <option value="7.82">45</option>
      
        <option value="7.81">65</option>
      
        <option value="7.85">65Г</option>
      
        <option value="7.85">09Г2С</option>
      
        <option value="7.75">15Х5М</option>
      
        <option value="7.85">10ХСНД</option>
      
        <option value="7.8">12Х1МФ</option>
      
        <option value="7.81">ШХ15</option>
      
        <option value="8.3">Р6М5</option>
      
        <option value="7.83">У7</option>
      
        <option value="7.84">У8</option>
      
        <option value="7.83">У8А</option>
      
        <option value="7.81">У10</option>
      
        <option value="7.81">У10А</option>
      
        <option value="7.81">У12А</option>
      
        <option value="7.8">Прочее</option>
      
    </select>
</label>
</div><div><label>
	<span class="field-label">Номер шестигранника a</span>
	<input class="width-100 dia" name="a" type="text" placeholder="0">
  <span class="input-append">мм.</span>
</label>
</div><div><label>
	<span class="field-label">Длина L</span>
	<input class="width-100 length" name="l" type="text" placeholder="0">
  <span class="input-append">м.</span>
</label>
</div><a class="btn main-btn btn-green width-100">Рассчитать</a></div>
`;



nav.forEach(item =>{
    item.addEventListener('click', (e)=>{
        if(e.target.innerText === 'Черный'){
            addSteel(steel);
        }
        if(e.target.innerText === 'Нержавейка'){
            addSteel(nerz);
        }
        if(e.target.innerText === 'Алюминий'){
            addSteel(alum);
        }
        if(e.target.innerText === 'Медь'){
            addSteel(cuprum);
        }
        if(e.target.innerText === 'Латунь'){
            addSteel(latun);
        }
        if(e.target.innerText === 'Бронза'){
            addSteel(bronza);
        }
        if(e.target.innerText === 'Титан'){
            addSteel(titan);
        }
        if(e.target.innerText === 'Арматура'){
            imgadd(linkImg, 0, imgClass, 0);
            addForm (formArmat);
            culcArma();
        }
        if(e.target.innerText === 'Балка/двутавр'){
            imgadd(linkImg, 1, imgClass, 1);
            addForm (formBalka);
            culcBalka ();
        }
        if(e.target.innerText === 'Квадрат'){
            imgadd(linkImg, 12, imgClass, 12);
            addForm (formCube);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                default:
                    break;
            }
            culcCube();
        }
        if(e.target.innerText === 'Круг/пруток'){
            imgadd(linkImg, 4, imgClass, 4);
            addForm (formCrug);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                case 'Медь':
                    addSelect(steelOptions[0].cuprum);
                    break;
                case 'Латунь':
                    addSelect(steelOptions[0].brass);
                    break;
                case 'Бронза':
                    addSelect(steelOptions[0].bronze);
                    break;
                case 'Титан':
                    addSelect(steelOptions[0].titan);
                    break;
                default:
                    break;
            }
            culcCrug ();
        }
        if(e.target.innerText === 'Лента'){
            imgadd(linkImg, 11, imgClass, 11);
            addForm (formLenta);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                case 'Медь':
                    addSelect(steelOptions[0].cuprum);
                    break;
                case 'Латунь':
                    addSelect(steelOptions[0].brass);
                    break;
                case 'Бронза':
                    addSelect(steelOptions[0].bronze);
                    break;
                case 'Титан':
                    addSelect(steelOptions[0].titan);
                    break;
                default:
                    break;
            }
            culcLenta();

        }
        if(e.target.innerText === 'Лист/плита'){
            imgadd(linkImg, 8, imgClass, 8);
            addForm (formList);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                case 'Медь':
                    addSelect(steelOptions[0].cuprum);
                    break;
                case 'Латунь':
                    addSelect(steelOptions[0].brass);
                    break;
                case 'Бронза':
                    addSelect(steelOptions[0].bronze);
                    break;
                case 'Титан':
                    addSelect(steelOptions[0].titan);
                    break;
                default:
                    break;
            }
            culcList();
        }
        if(e.target.innerText === 'Отвод'){
            imgadd(linkImg, 2, imgClass, 2);
            addForm (formotvod);
        }
        if(e.target.innerText === 'Труба круглая'){
            imgadd(linkImg, 9, imgClass, 9);
            addForm (formTrubaKr);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                case 'Медь':
                    addSelect(steelOptions[0].cuprum);
                    break;
                case 'Латунь':
                    addSelect(steelOptions[0].brass);
                    break;
                case 'Титан':
                    addSelect(steelOptions[0].titan);
                    break;
                default:
                    break;
            }
            culcTrubaKr();
        }
        if(e.target.innerText === 'Труба профильная'){
            imgadd(linkImg, 10, imgClass, 10);
            addForm (formTrubaPr);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                case 'Титан':
                    addSelect(steelOptions[0].titan);
                    break;
                default:
                    break;
            }
            culcTrubaPr();
        }
        if(e.target.innerText === 'Уголок'){
            imgadd(linkImg, 5, imgClass, 5);
            addForm (formUgol);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                default:
                    break;
            }
            culcUgolok();
        }
        if(e.target.innerText === 'Фланец плоский'){
            imgadd(linkImg, 6, imgClass, 6);
            addForm (formFlan);
        }
        if(e.target.innerText === 'Швеллер'){
            imgadd(linkImg, 3, imgClass, 3);
            addForm (formShvel);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                default:
                    break;
            }
            culcShveler();
        }
        if(e.target.innerText === 'Шестигранник'){
            imgadd(linkImg, 7, imgClass, 7);
            addForm (formShest);
            switch (search()) {
                case 'Черный':
                    addSelect(steelOptions[0].steel);
                    break;
                case 'Нержавейка':
                    addSelect(steelOptions[0].stainlessSteel);
                    break;
                case 'Алюминий':
                    addSelect(steelOptions[0].aluminum);
                    break;
                case 'Латунь':
                    addSelect(steelOptions[0].brass);
                    break;
                default:
                    break;
            }
            culcShest();
        }

	})
})
    culcTrubaKr();
function addSteel(steel){
    let unit60 = document.querySelector('.unit-60');
    let block = unit60.querySelector('ul')
    let child = block.querySelectorAll('li');

    for (let i = 0; i < child.length; i++) {
        block.removeChild(child[i]);
    }
    for (let i = 0; i < steel.length; i++) {
        let chil_not = document.createElement('li');
            chil_not.innerHTML = `
                 <a onclick="return false;" href="#">${steel[i]}</a>
            `;
        block.append(chil_not);
    }
}
    function search() {
        // Получаем все элементы списка
        const items = document.querySelectorAll('ul[data-region="metall-list"] li');

        // Перебираем элементы
        for (const item of items) {
            // Проверяем, есть ли у элемента класс 'active'
            if (item.classList.contains('active')) {
                // Если есть, возвращаем текст элемента
                return item.textContent.trim();
            }
        }
    }



function addSelect(steelOptions){
    const select = document.querySelector('select');
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }

    for(let i = 0; i<steelOptions.length; i++ ){
        // Создаем новый элемент option
        const newOption = document.createElement('option');

        // Устанавливаем значение и текст новой опции
        newOption.value = steelOptions[i].value;
        newOption.text = steelOptions[i].label;
        newOption.selected = steelOptions[i].selected ? true : '';
        // Добавляем новую опцию в конец select
        select.appendChild(newOption);
    }

}


function imgadd(linkImg, i, imgClass, b){
    let parImg = document.querySelector('.img');
    let img = document.querySelector('.pane-img');
    parImg.removeChild(img);

    let imgAdd = document.createElement('img');
    
    imgAdd.className = "pane-img " + imgClass[b];
    imgAdd.src = linkImg[i];
    parImg.append(imgAdd)
}


function addForm (formArmat){
    let forms = document.querySelector('.forms');
    let childForm = document.querySelector('.childForm');
    forms.removeChild(childForm);
    let newForm = document.createElement('div');
        newForm.className = "childForm";
        newForm.innerHTML = formArmat;
    forms.append(newForm);
}

function culcArma(){
    let submit = document.querySelector('.btn-green');
    submit.addEventListener('click', ()=>{
        let select = document.querySelector('select').value.replace(/,/g, '.');
        let input = document.querySelector('input').value.replace(/,/g, '.');
        let result = (((Number(select)*Number(select)*3.14)/4)*7.85)/1000;
        let result2 = result*input;
        document.querySelectorAll('.result-item-value')[1].textContent = result2.toFixed(3) + ' кг';
    })
}

function culcBalka (){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select.numBalk').value.replace(/,/g, '.');
    let input = document.querySelector('input').value.replace(/,/g, '.');
    let result = Number(select)*Number(input);
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcCube(){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select').value.replace(/,/g, '.');
    let inputSt = document.querySelector('input.storona').value.replace(/,/g, '.');
    let inputWh = document.querySelector('input.width').value.replace(/,/g, '.');
    let result = ((select*(inputSt*inputSt))*inputWh)/1000;
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcCrug (){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select').value.replace(/,/g, '.');
    let inputSt = document.querySelector('input.dia').value.replace(/,/g, '.');
    let inputWh = document.querySelector('input.width').value.replace(/,/g, '.');
    let result = (3.14*(Number(inputSt)*Number(inputSt))/4*Number(inputWh)*Number(select))/1000;
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcLenta(){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select').value.replace(/,/g, '.');
    let inputHv = document.querySelector('input.height').value.replace(/,/g, '.');
    let inputWh = document.querySelector('input.width').value.replace(/,/g, '.');
    let inputSz = document.querySelector('input.size').value.replace(/,/g, '.');
    let result = (inputSz * inputHv * inputWh * select) /1000;
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcList(){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select').value.replace(/,/g, '.');
    let inputHv = document.querySelector('input.height').value.replace(/,/g, '.');
    let inputWh = document.querySelector('input.width').value.replace(/,/g, '.');
    let inputSz = document.querySelector('input.size').value.replace(/,/g, '.');
    let inputCnt = document.querySelector('input.count').value.replace(/,/g, '.');
    let result = ((inputSz * inputHv * inputWh * select) * inputCnt)/1000000;
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcTrubaKr(){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select').value.replace(/,/g, '.');
    let inputDia = document.querySelector('input.dia').value.replace(/,/g, '.');
    let inputWh = document.querySelector('input.width').value.replace(/,/g, '.');
    let inputLg = document.querySelector('input.length').value.replace(/,/g, '.');
    let result = ((3.14 * (inputDia - inputWh) * inputWh * select) * inputLg) / 1000;
    console.log(inputDia - inputWh)
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcTrubaPr(){
  let submit = document.querySelector('.btn-green');
  submit.addEventListener('click', ()=>{
    let select = document.querySelector('select').value.replace(/,/g, '.');
    let inputHv = document.querySelector('input.height').value.replace(/,/g, '.');
    let inputWh = document.querySelector('input.width').value.replace(/,/g, '.');
    let inputSz = document.querySelector('input.size').value.replace(/,/g, '.');
    let inputLg = document.querySelector('input.length').value.replace(/,/g, '.');
    let result = ((2 * (parseFloat(inputHv) + parseFloat(inputWh)) * parseFloat(inputSz) * parseFloat(select)) * parseFloat(inputLg))/1000;
    document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
  })
}

function culcUgolok() {
    let submit = document.querySelector('.btn-green');
    submit.addEventListener('click', () => {
        let select = document.querySelector('select').value.replace(/,/g, '.');
        let inputA = document.querySelector('input.a').value.replace(/,/g, '.');
        let inputB = document.querySelector('input.b').value.replace(/,/g, '.');
        let inputT = document.querySelector('input.t').value.replace(/,/g, '.');
        let inputL = document.querySelector('input.l').value.replace(/,/g, '.');
        let square = (parseFloat(inputA) + parseFloat(inputB) - parseFloat(inputT)) * parseFloat(inputT);
        let result = (parseFloat(select) * square * parseFloat(inputL)) / 1000;
        document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
    })
}

function culcShveler(){
    let submit = document.querySelector('.btn-green');
    submit.addEventListener('click', () => {
        let select = document.querySelector('select').value.replace(/,/g, '.');
        let inputL = document.querySelector('input.l').value.replace(/,/g, '.');
        let result = parseFloat(select) * parseFloat(inputL);
        document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
    })
}

function culcShest(){
    let submit = document.querySelector('.btn-green');
    submit.addEventListener('click', () => {
        let select = document.querySelector('select').value.replace(/,/g, '.');
        let inputA = document.querySelector('input.dia').value.replace(/,/g, '.');
        let inputB = document.querySelector('input.length').value.replace(/,/g, '.');
        let total = (3.464*inputA/2*inputA/2*select)/1000;
        let result = total* inputB;
        document.querySelectorAll('.result-item-value')[1].textContent = result.toFixed(3) + ' кг';
    })
}


})