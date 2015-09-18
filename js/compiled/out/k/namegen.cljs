(ns ^:figwheel-always k.namegen
    (:require
    	[rum :include-macros true]
    	[clojure.string :refer [replace]]))


;;
;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {
	:events []
}))



(defonce band-names [
["човг" "shoegaze"]
["село" "country"]

["абаз" ""]
["абак" ""]
["абат" ""]
["авар" ""]
["авто" ""]
["агар" ""]
["агат" ""]
["агей" ""]
["агел" ""]
["агов" ""]
["агор" ""]
["агуш" ""]
["Адам" ""]
["адат" ""]
["Аден" ""]
["адже" ""]
["ажан" ""]
["ажур" ""]
["азид" ""]
["Азов" ""]
["азот" ""]
["айва" ""]
["айни" ""]
["акан" ""]
["акин" ""]
["акут" ""]
["алан" ""]
["Алан" ""]
["Ален" ""]
["алея" ""]
["Алла" ""]
["алло" ""]
["алое" ""]
["альт" ""]
["алюр" ""]
["амба" ""]
["амур" ""]
["Анди" ""]
["Анна" ""]
["анод" ""]
["анти" ""]
["анус" ""]
["апаш" ""]
["араб" ""]
["арак" ""]
["арап" ""]
["арат" ""]
["арго" ""]
["арик" ""]
["ариш" ""]
["арка" ""]
["арфа" ""]
["арча" ""]
["атож" ""]
["атол" ""]
["атом" ""]
["аура" ""]
["ачхи" ""]
["Аякс" ""]
["Баал" ""]
["баба" ""]
["бадя" ""]
["база" ""]
["байт" ""]
["банк" ""]
["бант" ""]
["баня" ""]
["бард" ""]
["барк" ""]
["барс" ""]
["баск" ""]
["баст" ""]
["батя" ""]
["баул" ""]
["баян" ""]
["безе" ""]
["бенд" ""]
["Берн" ""]
["бета" ""]
["бзик" ""]
["бинт" ""]
["биня" ""]
["бити" ""]
["бито" ""]
["бияк" ""]
["блат" ""]
["блеф" ""]
["блог" ""]
["блок" ""]
["блуд" ""]
["блюз" ""]
["бовт" ""]
["бодо" ""]
["боже" ""]
["бока" ""]
["бокс" ""]
["бола" ""]
["болт" ""]
["болю" ""]
["бомж" ""]
["бона" ""]
["бонд" ""]
["бора" ""]
["борг" ""]
["борт" ""]
["борщ" ""]
["боюн" ""]
["брак" ""]
["брас" ""]
["брат" ""]
["бриг" ""]
["брид" ""]
["бриз" ""]
["брик" ""]
["брит" ""]
["бром" ""]
["бруд" ""]
["брук" ""]
["брус" ""]
["Брюс" ""]
["бува" ""]
["буда" ""]
["буде" ""]
["буду" ""]
["будь" ""]
["буза" ""]
["була" ""]
["буле" ""]
["були" ""]
["було" ""]
["буль" ""]
["буна" ""]
["бунт" ""]
["бура" ""]
["бурт" ""]
["бурш" ""]
["буря" ""]
["бути" ""]
["бутс" ""]
["буфи" ""]
["буфо" ""]
["бухи" ""]
["буча" ""]
["буша" ""]
["буяв" ""]
["буян" ""]
["бюро" ""]
["бюст" ""]
["бязь" ""]
["бяка" ""]
["Ваал" ""]
["ваба" ""]
["вава" ""]
["вага" ""]
["вада" ""]
["ваза" ""]
["Вакх" ""]
["вали" ""]
["вами" ""]
["вамп" ""]
["Ваня" ""]
["Варя" ""]
["вася" ""]
["Вася" ""]
["вата" ""]
["ваша" ""]
["ваше" ""]
["вашо" ""]
["вашу" ""]
["вгав" ""]
["вгин" ""]
["вдих" ""]
["Вега" ""]
["вежа" ""]
["вена" ""]
["венд" ""]
["вепр" ""]
["верп" ""]
["верф" ""]
["верх" ""]
["вест" ""]
["весь" ""]
["вето" ""]
["взад" ""]
["взяв" ""]
["вика" ""]
["вила" ""]
["вина" ""]
["вино" ""]
["виск" ""]
["вити" ""]
["вияв" ""]
["вниз" ""]
["внук" ""]
["вовк" ""]
["вода" ""]
["воли" ""]
["воло" ""]
["воля" ""]
["вона" ""]
["вони" ""]
["воно" ""]
["ворс" ""]
["воша" ""]
["вошу" ""]
["воща" ""]
["вояж" ""]
["вояк" ""]
["враз" ""]
["вруб" ""]
["вряд" ""]
["всяк" ""]
["вуду" ""]
["вуса" ""]
["вухо" ""]
["вчас" ""]
["вшир" ""]
["габа" ""]
["гага" ""]
["гадь" ""]
["Газа" ""]
["гайо" ""]
["гало" ""]
["галс" ""]
["галь" ""]
["Галя" ""]
["гама" ""]
["Гана" ""]
["Ганг" ""]
["Ганс" ""]
["гарт" ""]
["гарч" ""]
["гать" ""]
["гаус" ""]
["Геба" ""]
["гель" ""]
["гема" ""]
["герб" ""]
["герд" ""]
["герц" ""]
["гети" ""]
["геть" ""]
["гидь" ""]
["гила" ""]
["гиля" ""]
["гиря" ""]
["глас" ""]
["глей" ""]
["глек" ""]
["глет" ""]
["глиб" ""]
["глип" ""]
["глум" ""]
["глуш" ""]
["глюк" ""]
["гнав" ""]
["Гнат" ""]
["гном" ""]
["гнус" ""]
["гній" ""]
["Гогі" ""]
["гонг" ""]
["гора" ""]
["горб" ""]
["горе" ""]
["гофр" ""]
["граб" ""]
["град" ""]
["грай" ""]
["грак" ""]
["грам" ""]
["гран" ""]
["грат" ""]
["граф" ""]
["грач" ""]
["Грег" ""]
["грек" ""]
["гриб" ""]
["гриб" ""]
["грим" ""]
["грип" ""]
["гриф" ""]
["гроб" ""]
["грог" ""]
["грот" ""]
["груд" ""]
["грум" ""]
["грюк" ""]
["гріх" ""]
["гріш" ""]
["гуаш" ""]
["губа" ""]
["гуде" ""]
["гума" ""]
["гурд" ""]
["гурт" ""]
["гуру" ""]
["гуси" ""]
["густ" ""]
["гуся" ""]
["гута" ""]
["гуща" ""]
["гюйс" ""]
["гяур" ""]
["даба" ""]
["дама" ""]
["дата" ""]
["дати" ""]
["даун" ""]
["дача" ""]
["Даша" ""]
["даяк" ""]
["двом" ""]
["двох" ""]
["Дейв" ""]
["дека" ""]
["деко" ""]
["дель" ""]
["дена" ""]
["день" ""]
["депо" ""]
["десь" ""]
["дещо" ""]
["джаз" ""]
["джек" ""]
["Джек" ""]
["джем" ""]
["Джеф" ""]
["Джим" ""]
["джин" ""]
["джип" ""]
["джок" ""]
["джон" ""]
["Джон" ""]
["Джуд" ""]
["джут" ""]
["дзен" ""]
["дзот" ""]
["диба" ""]
["диво" ""]
["дикт" ""]
["дина" ""]
["диня" ""]
["диск" ""]
["дитя" ""]
["дмеш" ""]
["доба" ""]
["доза" ""]
["доки" ""]
["долу" ""]
["доля" ""]
["дома" ""]
["доми" ""]
["дому" ""]
["донг" ""]
["доня" ""]
["Дора" ""]
["дорн" ""]
["доти" ""]
["доха" ""]
["доця" ""]
["дощі" ""]
["дояр" ""]
["драп" ""]
["драч" ""]
["дрен" ""]
["дрил" ""]
["друг" ""]
["друк" ""]
["дрюк" ""]
["Дувр" ""]
["дуга" ""]
["дуда" ""]
["дует" ""]
["дужо" ""]
["дуло" ""]
["дуля" ""]
["дума" ""]
["дунь" ""]
["дуня" ""]
["Дуня" ""]
["дупа" ""]
["дурь" ""]
["дурь" ""]
["дуст" ""]
["дути" ""]
["дуча" ""]
["душа" ""]
["дюза" ""]
["дюйм" ""]
["дюна" ""]
["дядя" ""]
["едем" ""]
["Едик" ""]
["екер" ""]
["Елла" ""]
["ельф" ""]
["еман" ""]
["емер" ""]
["емка" ""]
["Емма" ""]
["Еней" ""]
["епод" ""]
["епос" ""]
["ерзя" ""]
["ерос" ""]
["есей" ""]
["есер" ""]
["етан" ""]
["етап" ""]
["етер" ""]
["етил" ""]
["Етна" ""]
["етюд" ""]
["Ефат" ""]
["ефес" ""]
["жаба" ""]
["жабо" ""]
["жага" ""]
["жако" ""]
["жало" ""]
["жаль" ""]
["жанр" ""]
["жара" ""]
["жарт" ""]
["жати" ""]
["жбан" ""]
["жезл" ""]
["желе" ""]
["жене" ""]
["жени" ""]
["жену" ""]
["Женя" ""]
["жест" ""]
["живо" ""]
["жига" ""]
["жиди" ""]
["жижа" ""]
["жила" ""]
["жири" ""]
["жиро" ""]
["жити" ""]
["жито" ""]
["жлоб" ""]
["жмак" ""]
["жмих" ""]
["жмут" ""]
["жнеш" ""]
["жовч" ""]
["жона" ""]
["Жора" ""]
["Жорж" ""]
["Жуан" ""]
["жупа" ""]
["загс" ""]
["зала" ""]
["залп" ""]
["зась" ""]
["зате" ""]
["заум" ""]
["збут" ""]
["звих" ""]
["звук" ""]
["згар" ""]
["згин" ""]
["зебу" ""]
["Зевс" ""]
["зеро" ""]
["зжав" ""]
["зима" ""]
["зиск" ""]
["злак" ""]
["злам" ""]
["злет" ""]
["злий" ""]
["злом" ""]
["змах" ""]
["змив" ""]
["змор" ""]
["знак" ""]
["знов" ""]
["знос" ""]
["зойк" ""]
["зола" ""]
["золь" ""]
["зона" ""]
["зонд" ""]
["зоря" ""]
["Зося" ""]
["зрив" ""]
["зруб" ""]
["зсув" ""]
["зуав" ""]
["зубр" ""]
["зулу" ""]
["зюзя" ""]
["зюйд" ""]
["зять" ""]
["йога" ""]
["його" ""]
["йому" ""]
["йорж" ""]
["Йорк" ""]
["йота" ""]
["кава" ""]
["кадр" ""]
["кайф" ""]
["кака" ""]
["Кама" ""]
["кант" ""]
["каня" ""]
["каон" ""]
["капа" ""]
["капо" ""]
["кара" ""]
["карб" ""]
["карк" ""]
["Карл" ""]
["каса" ""]
["Катя" ""]
["Кафа" ""]
["кафе" ""]
["каша" ""]
["каюк" ""]
["каюр" ""]
["каяк" ""]
["каїн" ""]
["квак" ""]
["квас" ""]
["квач" ""]
["квит" ""]
["кеди" ""]
["кедр" ""]
["кейс" ""]
["кейф" ""]
["кекс" ""]
["Кент" ""]
["керн" ""]
["Керч" ""]
["кета" ""]
["кипа" ""]
["кирт" ""]
["киця" ""]
["кияк" ""]
["ккал" ""]
["клан" ""]
["клас" ""]
["клац" ""]
["клей" ""]
["клен" ""]
["Клим" ""]
["клин" ""]
["клич" ""]
["Клод" ""]
["клон" ""]
["клоп" ""]
["клуб" ""]
["клуп" ""]
["клус" ""]
["ключ" ""]
["кляп" ""]
["кмин" ""]
["книш" ""]
["кнур" ""]
["кого" ""]
["кода" ""]
["коза" ""]
["кокс" ""]
["коли" ""]
["коло" ""]
["коля" ""]
["Коля" ""]
["кома" ""]
["кому" ""]
["конь" ""]
["копа" ""]
["копт" ""]
["кора" ""]
["корд" ""]
["корж" ""]
["корм" ""]
["корт" ""]
["корч" ""]
["корч" ""]
["коса" ""]
["кота" ""]
["коти" ""]
["коту" ""]
["котя" ""]
["коша" ""]
["кошт" ""]
["кошу" ""]
["краб" ""]
["край" ""]
["крам" ""]
["кран" ""]
["крах" ""]
["крез" ""]
["крем" ""]
["крен" ""]
["креп" ""]
["крех" ""]
["криж" ""]
["крий" ""]
["крик" ""]
["Крим" ""]
["Крит" ""]
["кров" ""]
["крок" ""]
["крос" ""]
["круг" ""]
["крук" ""]
["крюк" ""]
["кряж" ""]
["Куба" ""]
["куди" ""]
["кука" ""]
["Кука" ""]
["куль" ""]
["куля" ""]
["кума" ""]
["купа" ""]
["купе" ""]
["Кура" ""]
["курд" ""]
["кури" ""]
["курс" ""]
["Курт" ""]
["кутя" ""]
["кюре" ""]
["лава" ""]
["Лада" ""]
["лайм" ""]
["лама" ""]
["лами" ""]
["Лана" ""]
["лани" ""]
["лань" ""]
["Лаос" ""]
["лапа" ""]
["лари" ""]
["ласо" ""]
["ласт" ""]
["лати" ""]
["лафа" ""]
["ледь" ""]
["лезо" ""]
["леле" ""]
["лема" ""]
["Лена" ""]
["ленч" ""]
["Леон" ""]
["Лесь" ""]
["Леся" ""]
["лета" ""]
["лечо" ""]
["лижа" ""]
["лико" ""]
["липа" ""]
["лиск" ""]
["лист" ""]
["лити" ""]
["лихо" ""]
["лице" ""]
["лише" ""]
["лого" ""]
["ложа" ""]
["ложе" ""]
["лоза" ""]
["Лола" ""]
["лоло" ""]
["лоно" ""]
["лорд" ""]
["лоск" ""]
["лось" ""]
["Лось" ""]
["лото" ""]
["лоша" ""]
["лояк" ""]
["луза" ""]
["Лука" ""]
["луле" ""]
["луна" ""]
["лунь" ""]
["лупа" ""]
["луск" ""]
["льон" ""]
["льох" ""]
["Люба" ""]
["люди" ""]
["люес" ""]
["люкс" ""]
["лють" ""]
["люфт" ""]
["ляги" ""]
["ляда" ""]
["ляля" ""]
["ляма" ""]
["лярд" ""]
["ляси" ""]
["ляск" ""]
["лясь" ""]
["мавр" ""]
["мазь" ""]
["Майк" ""]
["майя" ""]
["Макс" ""]
["маля" ""]
["мама" ""]
["мами" ""]
["мана" ""]
["мапа" ""]
["мара" ""]
["Марк" ""]
["марс" ""]
["Марс" ""]
["марш" ""]
["маса" ""]
["мате" ""]
["мати" ""]
["матч" ""]
["маца" ""]
["мачо" ""]
["Маша" ""]
["Маша" ""]
["маяк" ""]
["межа" ""]
["мене" ""]
["менш" ""]
["меню" ""]
["меса" ""]
["мета" ""]
["метр" ""]
["миза" ""]
["мило" ""]
["миля" ""]
["мимо" ""]
["минь" ""]
["миро" ""]
["мирт" ""]
["мити" ""]
["мито" ""]
["миша" ""]
["мишу" ""]
["млин" ""]
["млрд" ""]
["мною" ""]
["мова" ""]
["мого" ""]
["мода" ""]
["може" ""]
["можу" ""]
["моль" ""]
["Мона" ""]
["моно" ""]
["мопс" ""]
["морг" ""]
["море" ""]
["морж" ""]
["морс" ""]
["морф" ""]
["муар" ""]
["мудь" ""]
["муза" ""]
["мука" ""]
["мура" ""]
["муст" ""]
["муха" ""]
["мюон" ""]
["Надя" ""]
["нами" ""]
["Нант" ""]
["Нара" ""]
["нард" ""]
["нари" ""]
["наст" ""]
["нате" ""]
["натр" ""]
["Наум" ""]
["наче" ""]
["наша" ""]
["наше" ""]
["нашу" ""]
["нащо" ""]
["небо" ""]
["Нева" ""]
["негр" ""]
["Неля" ""]
["нема" ""]
["неня" ""]
["неон" ""]
["нерв" ""]
["неук" ""]
["нива" ""]
["низь" ""]
["ними" ""]
["нити" ""]
["ница" ""]
["нице" ""]
["ниць" ""]
["нога" ""]
["нома" ""]
["нона" ""]
["нора" ""]
["норд" ""]
["носа" ""]
["носи" ""]
["носу" ""]
["нота" ""]
["ноша" ""]
["нубо" ""]
["нуга" ""]
["нуль" ""]
["нумо" ""]
["нурт" ""]
["нюня" ""]
["няня" ""]
["оаза" ""]
["обоз" ""]
["обом" ""]
["обох" ""]
["обух" ""]
["овал" ""]
["овва" ""]
["Овен" ""]
["овес" ""]
["овоч" ""]
["огар" ""]
["Одер" ""]
["один" ""]
["одна" ""]
["одне" ""]
["одно" ""]
["одну" ""]
["одуд" ""]
["одур" ""]
["одяг" ""]
["озон" ""]
["окап" ""]
["окис" ""]
["окоп" ""]
["Олег" ""]
["оман" ""]
["Оман" ""]
["омар" ""]
["онде" ""]
["онук" ""]
["опад" ""]
["опал" ""]
["опис" ""]
["опит" ""]
["опус" ""]
["опух" ""]
["опік" ""]
["орар" ""]
["орач" ""]
["орда" ""]
["орел" ""]
["орля" ""]
["осад" ""]
["осей" ""]
["осел" ""]
["осип" ""]
["Осип" ""]
["осля" ""]
["осот" ""]
["осуд" ""]
["осям" ""]
["осях" ""]
["отак" ""]
["отам" ""]
["отже" ""]
["отит" ""]
["отож" ""]
["отут" ""]
["оцей" ""]
["оцет" ""]
["оцим" ""]
["оцих" ""]
["очам" ""]
["очах" ""]
["очей" ""]
["очко" ""]
["пава" ""]
["падь" ""]
["пака" ""]
["пакт" ""]
["паля" ""]
["пани" ""]
["панк" ""]
["папа" ""]
["пара" ""]
["парк" ""]
["паця" ""]
["паче" ""]
["паша" ""]
["Паша" ""]
["паща" ""]
["паяц" ""]
["пеан" ""]
["пейс" ""]
["пенс" ""]
["пень" ""]
["пеня" ""]
["пеон" ""]
["перл" ""]
["перо" ""]
["перс" ""]
["перш" ""]
["песо" ""]
["петя" ""]
["пиво" ""]
["пика" ""]
["пика" ""]
["писк" ""]
["пити" ""]
["пиха" ""]
["пияк" ""]
["плав" ""]
["плай" ""]
["план" ""]
["плац" ""]
["плач" ""]
["плащ" ""]
["плед" ""]
["плин" ""]
["плис" ""]
["плов" ""]
["плуг" ""]
["плюс" ""]
["плюш" ""]
["плющ" ""]
["пляж" ""]
["повз" ""]
["поди" ""]
["поет" ""]
["поза" ""]
["поки" ""]
["поле" ""]
["полк" ""]
["поло" ""]
["Поль" ""]
["попа" ""]
["пора" ""]
["порт" ""]
["пост" ""]
["поти" ""]
["пощо" ""]
["пояс" ""]
["прах" ""]
["прач" ""]
["прес" ""]
["приз" ""]
["прищ" ""]
["пруг" ""]
["прут" ""]
["псар" ""]
["псих" ""]
["птах" ""]
["пуга" ""]
["пузо" ""]
["пума" ""]
["пуна" ""]
["пунш" ""]
["пурх" ""]
["пуск" ""]
["пута" ""]
["путо" ""]
["путч" ""]
["пуща" ""]
["пшик" ""]
["пюре" ""]
["пір'я" ""]
["раба" ""]
["рагу" ""]
["рада" ""]
["рало" ""]
["рама" ""]
["рана" ""]
["ранг" ""]
["рано" ""]
["рант" ""]
["рапс" ""]
["раса" ""]
["рать" ""]
["раут" ""]
["рвач" ""]
["реал" ""]
["реве" ""]
["ревю" ""]
["рейв" ""]
["рейд" ""]
["Рейн" ""]
["рейс" ""]
["рейх" ""]
["рекс" ""]
["реле" ""]
["Ренн" ""]
["репс" ""]
["риба" ""]
["Рига" ""]
["риза" ""]
["рило" ""]
["рима" ""]
["ринг" ""]
["риса" ""]
["риск" ""]
["рись" ""]
["рити" ""]
["ритм" ""]
["рифт" ""]
["роба" ""]
["рови" ""]
["рову" ""]
["рожа" ""]
["Роза" ""]
["роль" ""]
["Рома" ""]
["ромб" ""]
["Рона" ""]
["ронг" ""]
["ропа" ""]
["роса" ""]
["рота" ""]
["Руан" ""]
["руба" ""]
["руда" ""]
["рука" ""]
["руль" ""]
["руна" ""]
["руно" ""]
["руст" ""]
["Русь" ""]
["рута" ""]
["Рута" ""]
["руця" ""]
["рябо" ""]
["ряжа" ""]
["ряса" ""]
["ряст" ""]
["ріка" ""]
["саам" ""]
["сабо" ""]
["Сава" ""]
["сага" ""]
["саго" ""]
["сажа" ""]
["сайт" ""]
["саке" ""]
["сакс" ""]
["сало" ""]
["саме" ""]
["сани" ""]
["сапа" ""]
["Сара" ""]
["Саша" ""]
["сван" ""]
["сват" ""]
["свою" ""]
["своя" ""]
["себе" ""]
["сейм" ""]
["сейф" ""]
["секс" ""]
["сель" ""]
["семи" ""]
["Сена" ""]
["сенс" ""]
["серб" ""]
["серп" ""]
["Сеул" ""]
["сеча" ""]
["сиво" ""]
["сидр" ""]
["сикх" ""]
["сила" ""]
["синь" ""]
["сито" ""]
["сказ" ""]
["скат" ""]
["скиг" ""]
["скид" ""]
["скис" ""]
["скит" ""]
["скло" ""]
["скот" ""]
["скін" ""]
["скіс" ""]
["слав" ""]
["слиж" ""]
["слиз" ""]
["слон" ""]
["слух" ""]
["Случ" ""]
["сляб" ""]
["смак" ""]
["смеш" ""]
["смик" ""]
["смог" ""]
["смух" ""]
["сноб" ""]
["сном" ""]
["сніг" ""]
["сніп" ""]
["сова" ""]
["сода" ""]
["соло" ""]
["соль" ""]
["сонм" ""]
["соня" ""]
["сопе" ""]
["сорт" ""]
["сото" ""]
["соул" ""]
["соус" ""]
["софа" ""]
["соха" ""]
["союз" ""]
["спад" ""]
["спам" ""]
["спас" ""]
["спаш" ""]
["спер" ""]
["спиж" ""]
["спин" ""]
["спис" ""]
["спот" ""]
["ссав" ""]
["ссеш" ""]
["став" ""]
["стаж" ""]
["стан" ""]
["стек" ""]
["степ" ""]
["стер" ""]
["стид" ""]
["стик" ""]
["стоп" ""]
["стос" ""]
["стук" ""]
["Стус" ""]
["стяг" ""]
["суга" ""]
["Суец" ""]
["сука" ""]
["сума" ""]
["сумо" ""]
["сура" ""]
["сусу" ""]
["суто" ""]
["суть" ""]
["суша" ""]
["сфен" ""]
["схил" ""]
["схов" ""]
["сход" ""]
["сюди" ""]
["сєрж" ""]
["сіль" ""]
["табу" ""]
["тавр" ""]
["тайм" ""]
["таки" ""]
["такт" ""]
["танк" ""]
["Таня" ""]
["тара" ""]
["таро" ""]
["тато" ""]
["таця" ""]
["твел" ""]
["твин" ""]
["твою" ""]
["твоя" ""]
["тебе" ""]
["теза" ""]
["тека" ""]
["теля" ""]
["тема" ""]
["темп" ""]
["тент" ""]
["терм" ""]
["тест" ""]
["теча" ""]
["теща" ""]
["тигр" ""]
["тими" ""]
["тире" ""]
["тирс" ""]
["тиск" ""]
["титр" ""]
["тиша" ""]
["ткач" ""]
["тмин" ""]
["тога" ""]
["того" ""]
["толк" ""]
["толь" ""]
["тому" ""]
["тоня" ""]
["тора" ""]
["торг" ""]
["торс" ""]
["торт" ""]
["торф" ""]
["тост" ""]
["тощо" ""]
["тпру" ""]
["трал" ""]
["трап" ""]
["трек" ""]
["трок" ""]
["трон" ""]
["троп" ""]
["трос" ""]
["Троя" ""]
["труд" ""]
["труп" ""]
["трус" ""]
["трут" ""]
["трюк" ""]
["трюм" ""]
["туба" ""]
["туга" ""]
["туди" ""]
["Тула" ""]
["тура" ""]
["туша" ""]
["туше" ""]
["тьма" ""]
["тьху" ""]
["тюль" ""]
["тюрк" ""]
["тяга" ""]
["тяма" ""]
["тяти" ""]
["тінь" ""]
["угар" ""]
["угин" ""]
["угри" ""]
["удав" ""]
["удар" ""]
["узор" ""]
["указ" ""]
["укол" ""]
["укус" ""]
["улан" ""]
["улар" ""]
["Улас" ""]
["улем" ""]
["улов" ""]
["улус" ""]
["униз" ""]
["унук" ""]
["упин" ""]
["упир" ""]
["упор" ""]
["ураз" ""]
["Урал" ""]
["уран" ""]
["урду" ""]
["урки" ""]
["урна" ""]
["урок" ""]
["урюк" ""]
["уряд" ""]
["усач" ""]
["уста" ""]
["усяк" ""]
["утор" ""]
["ухил" ""]
["Ухта" ""]
["ушир" ""]
["ушко" ""]
["уява" ""]
["фавн" ""]
["фаза" ""]
["файл" ""]
["факс" ""]
["факт" ""]
["фанг" ""]
["фанк" ""]
["фант" ""]
["фара" ""]
["фарс" ""]
["фарш" ""]
["фата" ""]
["феод" ""]
["ферт" ""]
["фетр" ""]
["флер" ""]
["флеш" ""]
["флот" ""]
["флюс" ""]
["Фома" ""]
["фонд" ""]
["фора" ""]
["форд" ""]
["форт" ""]
["фото" ""]
["фрак" ""]
["Фред" ""]
["фриз" ""]
["фтор" ""]
["фуга" ""]
["фула" ""]
["фуле" ""]
["фунт" ""]
["фура" ""]
["фіга" ""]
["хадж" ""]
["хала" ""]
["хаос" ""]
["харч" ""]
["хата" ""]
["хауз" ""]
["хачі" ""]
["хаща" ""]
["хват" ""]
["хвощ" ""]
["хвоя" ""]
["Хенк" ""]
["Херд" ""]
["хиба" ""]
["хижо" ""]
["хист" ""]
["хлоп" ""]
["хлор" ""]
["хлюп" ""]
["хлющ" ""]
["хмиз" ""]
["хода" ""]
["Хома" ""]
["хора" ""]
["хорт" ""]
["хота" ""]
["хоти" ""]
["хоха" ""]
["хоча" ""]
["хоче" ""]
["хочу" ""]
["храм" ""]
["храп" ""]
["храп" ""]
["хрип" ""]
["хром" ""]
["хрущ" ""]
["хрящ" ""]
["хрін" ""]
["Хуан" ""]
["худо" ""]
["хула" ""]
["хупа" ""]
["хура" ""]
["цабе" ""]
["цвях" ""]
["ценз" ""]
["цент" ""]
["цеце" ""]
["цикл" ""]
["цими" ""]
["цинк" ""]
["цинь" ""]
["ципа" ""]
["ципи" ""]
["цирк" ""]
["цить" ""]
["циця" ""]
["цюця" ""]
["цяця" ""]
["чадо" ""]
["чара" ""]
["чари" ""]
["чарт" ""]
["чата" ""]
["чача" ""]
["чаша" ""]
["чвал" ""]
["черв" ""]
["чинш" ""]
["Чита" ""]
["член" ""]
["чого" ""]
["чоло" ""]
["чому" ""]
["чорт" ""]
["чудо" ""]
["чудь" ""]
["чужо" ""]
["чума" ""]
["чуня" ""]
["чути" ""]
["шабо" ""]
["шаль" ""]
["шана" ""]
["шанс" ""]
["шарж" ""]
["шарм" ""]
["шарф" ""]
["шати" ""]
["шатл" ""]
["шафа" ""]
["шахи" ""]
["швед" ""]
["швом" ""]
["шейх" ""]
["шерп" ""]
["шило" ""]
["шина" ""]
["шити" ""]
["шифр" ""]
["шиїт" ""]
["шкот" ""]
["шлак" ""]
["шлам" ""]
["шлеш" ""]
["шлея" ""]
["шлюб" ""]
["шлюз" ""]
["шлюп" ""]
["шляк" ""]
["шлях" ""]
["шмат" ""]
["шмон" ""]
["шнек" ""]
["шнур" ""]
["шовк" ""]
["шона" ""]
["шори" ""]
["шосе" ""]
["шпак" ""]
["шпат" ""]
["шпиг" ""]
["шпик" ""]
["шпур" ""]
["шрам" ""]
["шрот" ""]
["штаб" ""]
["штам" ""]
["штат" ""]
["штиб" ""]
["штик" ""]
["штир" ""]
["шток" ""]
["штос" ""]
["штоф" ""]
["штуф" ""]
["шуба" ""]
["шуга" ""]
["шунт" ""]
["шурф" ""]
["шуст" ""]
["щеня" ""]
["щепа" ""]
["щоби" ""]
["щодо" ""]
["щока" ""]
["щось" ""]
["щука" ""]
["щуря" ""]
["юань" ""]
["юдей" ""]
["Юзеф" ""]
["юнак" ""]
["юнга" ""]
["юний" ""]
["юнка" ""]
["юрба" ""]
["юрик" ""]
["Юрко" ""]
["юрма" ""]
["юрок" ""]
["юрта" ""]
["Юхим" ""]
["юхта" ""]
["юшка" ""]
["явка" ""]
["явно" ""]
["ягня" ""]
["ядро" ""]
["язик" ""]
["Яйла" ""]
["яйце" ""]
["яйця" ""]
["якби" ""]
["який" ""]
["Яким" ""]
["якут" ""]
["якщо" ""]
["ялик" ""]
["Ялта" ""]
["ямка" ""]
["янус" ""]
["ярий" ""]
["ярка" ""]
["ярмо" ""]
["ярус" ""]
["ясен" ""]
["ясир" ""]
["ясла" ""]
["яслі" ""]
["ятка" ""]
["Яуза" ""]
["яхта" ""]
["яшма" ""]
["ящик" ""]
["ящур" ""]
["ісус" ""]])


(defn random-band-name[]
	;; rand-nth
	(rand-nth band-names))

(defonce current-band (atom ["" ""]))

(enable-console-print!)


(defn translit [s]
(-> s
    (replace #"А" "A")
(replace #"Б" "B")
(replace #"В" "V")
(replace #"Г" "H")
(replace #"Ґ" "G")
(replace #"Д" "D")
(replace #"Е" "E")
(replace #"^Є" "Ye")
(replace #"Ж" "Zh")
(replace #"З" "Z")
(replace #"И" "Y")
(replace #"І" "I")
(replace #"^Ї" "Yi")
(replace #"^Й" "Y")
(replace #"К" "K")
(replace #"Л" "L")
(replace #"М" "M")
(replace #"Н" "N")
(replace #"О" "O")
(replace #"П" "P")
(replace #"Р" "R")
(replace #"С" "S")
(replace #"Т" "T")
(replace #"У" "U")
(replace #"Ф" "F")
(replace #"Х" "Kh")
(replace #"Ц" "Ts")
(replace #"Ч" "Ch")
(replace #"Ш" "Sh")
(replace #"Щ" "Shch")
(replace #"^Ю" "Yu")
(replace #"^Я" "Ya")
(replace #"а" "a")
(replace #"б" "b")
(replace #"в" "v")
(replace #"г" "h")
(replace #"ґ" "g")
(replace #"д" "d")
(replace #"е" "e")
(replace #"є" "ie")
(replace #"ж^" "g")
(replace #"ж" "zh")
(replace #"з" "z")
(replace #"и" "y")
(replace #"і" "i")
(replace #"ї" "i")
(replace #"й" "i")
(replace #"к" "k")
(replace #"л" "l")
(replace #"м" "m")
(replace #"н" "n")
(replace #"о" "o")
(replace #"п" "p")
(replace #"р" "r")
(replace #"с" "s")
(replace #"т" "t")
(replace #"у" "u")
(replace #"ф" "f")
(replace #"х" "kh")
(replace #"ц" "ts")
(replace #"ч" "ch")
(replace #"ш" "sh")
(replace #"щ" "shch")
(replace #"ю" "iu")
(replace #"я" "ia")
(replace #"ь" "'")

    )
	)

(rum/defc static-cmp < rum/reactive [state]
	(let [[band style] @state]
		  [:section
  				[:header {:class "band-name"}
  					(if-not (= "" band)
  						(str "Група \"" band "\"  (" (translit band) ")")
  						""
  						)
  					]
  				;[:header {:class "band-name"} (translit band)]

  				[:div  style]
  				[:button {:on-click (fn [_]
  					;(println (random-band-name))
  					(reset! state (random-band-name))

  					)}
  					"Згенерувати"
  				]]))


;;
;; module exports


(defn band-name-generator[mount-el]

    (rum/mount (static-cmp current-band) mount-el)

    (add-watch current-band :band
      (fn [_ _ _ new-val]
      	(rum/mount (static-cmp current-band) mount-el)))

  )





