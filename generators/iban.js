var common = require('./common');
var bigInt = require('./bigInt');

var unitCodes = [
  "10100000", "10100039", "10100055", "10100068", "10101010", "10101023", "10101049", "10101078", "10101140", "10101212", "10101238", "10101270", "10101339", "10101371", "10101397", "10101401", "10101469", "10101528", "10101599", "10101674", "10101704", "10200003", "10200016", "10200029", "10200032", "10200045", "10200058", "10200061", "10200074", "10201013", "10201026", "10201042", "10201055", "10201068", "10201097", "10201127", "10201156", "10201169", "10201185", "10201260", "10201332", "10201390", "10201433", "10201462", "10201475", "10201491", "10201505", "10201563", "10201592", "10201664", "10201752", "10201778", "10201811", "10201853", "10201866", "10201879", "10201909", "10201912", "10201954", "10201967", "10202036", "10202124", "10202137", "10202212", "10202241", "10202267", "10202313", "10202368", "10202384", "10202401", "10202430", "10202472", "10202498", "10202528", "10202629", "10202645", "10202674", "10202733", "10202746", "10202762", "10202791", "10202821", "10202847", "10202892", "10202906", "10202964", "10202980", "10203017", "10203088", "10203121", "10203147", "10203150", "10203176", "10203206", "10203219", "10203235", "10203352", "10203378", "10203408", "10203437", "10203440", "10203453", "10203466", "10203541", "10203570", "10203583", "10203613", "10203639", "10203668", "10203714", "10203802", "10203844", "10203903", "10203916", "10203958", "10203974", "10204027", "10204115", "10204128", "10204144", "10204160", "10204274", "10204287", "10204317", "10204391", "10204405", "10204476", "10204564", "10204580", "10204649", "10204665", "10204681", "10204708", "10204724", "10204753", "10204795", "10204812", "10204867", "10204870", "10204900", "10204913", "10204926", "10204939", "10204955", "10204984", "10205011", "10205024", "10205040", "10205095", "10205112", "10205138", "10205170", "10205200", "10205226", "10205242", "10205297", "10205356", "10205385", "10205402", "10205460", "10205558", "10205561", "10205574", "10205587", "10205590", "10205604", "10205617", "10205620", "10205633", "10205659", "14400003", "14401013", "14401026", "14401039", "14401042", "14401055", "14401068", "14401071", "14401084", "14401097", "14401101", "14401127", "14401130", "14401143", "14401156", "14401169", "14401172", "14401185", "14401198", "14401202", "14401215", "14401228", "14401231", "14401244", "14401257", "14401260", "14401273", "14401286", "14401299", "14401332", "14401345", "14401358", "14401361", "14401387", "14401390", "10300006", "10300019", "10300022", "10301016", "10301029", "10301032", "10301045", "10301058", "10301061", "10301074", "10301087", "10301090", "10301104", "10301117", "10301120", "10301133", "10301146", "10301159", "10301162", "10301175", "10301188", "10301191", "10301205", "10301218", "10301221", "10301234", "10301247", "10301250", "10301263", "10301276", "10301289", "10301292", "10301306", "10301319", "10301322", "10301335", "10301348", "10301351", "10301364", "10301377", "10301380", "10301393", "10301407", "10301410", "10301423", "10301436", "10301449", "10301452", "10301465", "10301478", "10301481", "10301494", "10301508", "10301511", "10301524", "10301537", "10301540", "10301553", "10301566", "10301579", "10301582", "10301595", "10301609", "10301612", "10301625", "10301638", "10301641", "10301654", "10301667", "10301670", "10301683", "10301696", "10301700", "10301713", "10301726", "10301739", "10301742", "10301755", "10301768", "10301771", "10301814", "10301827", "10301830", "10301843", "10301856", "10301869", "10301872", "10301885", "10301898", "10301902", "10301915", "10301928", "10301931", "10301944", "10301957", "10301960", "10301973", "10301986", "10301999", "10500002", "10500015", "10500028", "10500031", "10500044", "10500057", "10500060", "10500073", "10500086", "10500099", "10500103", "10500116", "10500129", "10500132", "10500145", "10500158", "10500161", "10501012", "10501025", "10501038", "10501041", "10501054", "10501070", "10501083", "10501096", "10501100", "10501113", "10501139", "10501142", "10501155", "10501168", "10501171", "10501201", "10501214", "10501227", "10501230", "10501243", "10501256", "10501269", "10501272", "10501285", "10501298", "10501302", "10501315", "10501328", "10501331", "10501344", "10501357", "10501360", "10501373", "10501386", "10501399", "10501403", "10501416", "10501429", "10501432", "10501445", "10501458", "10501461", "10501474", "10501487", "10501490", "10501504", "10501517", "10501520", "10501533", "10501546", "10501559", "10501562", "10501575", "10501588", "10501591", "10501605", "10501618", "10501621", "10501634", "10501676", "10501722", "10501735", "10501748", "10501751", "10501764", "10501777", "10501793", "10501807", "10501810", "10501823", "10501836", "10501849", "10501852", "10501881", "10501894", "10501908", "10501911", "10501924", "10501937", "10501940", "10501953", "10501966", "10501979", "10600005", "10600018", "10600021", "10600034", "10600047", "10600050", "10600063", "10600076", "10600089", "10600092", "10600106", "10600119", "10600122", "10600135", "10600148", "10600151", "10600164", "10600177", "10600180", "10600193", "10600207", "10600249", "10600252", "10600265", "10600278", "10600281", "10600294", "10600308", "10600311", "10600324", "10600337", "10600340", "10600353", "10600366", "10600379", "10600382", "10600395", "10600409", "10602777", "10602780", "17100007", "10900004", "10900020", "10900033", "10900046", "10900059", "10900075", "10901014", "10901030", "10901043", "10901056", "10901069", "10901072", "10901098", "10901102", "10901115", "10901128", "10901131", "10901144", "10901157", "10901160", "10901173", "10901186", "10901199", "10901203", "10901216", "10901229", "10901232", "10901245", "10901258", "10901261", "10901274", "10901287", "10901290", "10901304", "10901317", "10901320", "10901333", "10901346", "10901359", "10901362", "10901375", "10901388", "10901391", "10901405", "10901418", "10901421", "10901434", "10901447", "10901450", "10901463", "10901476", "10901489", "10901492", "10901506", "10901519", "10901522", "10901535", "10901548", "10901551", "10901564", "10901577", "10901580", "10901593", "10901607", "10901623", "10901636", "10901649", "10901652", "10901665", "10901678", "10901681", "10901694", "10901708", "10901711", "10901737", "10901740", "10901753", "10901766", "10901779", "10901782", "10901795", "10901809", "10901812", "10901825", "10901838", "10901841", "10901854", "10901867", "10901870", "10901883", "10901896", "10901900", "10901926", "10901939", "10901942", "10901955", "10901968", "10901971", "10901984", "10901997", "10902008", "10902011", "10902024", "10902037", "10902040", "10902053", "10902066", "10902079", "10902082", "10902095", "10902109", "10902112", "10902125", "10902138", "10902141", "10902154", "10902167", "10902170", "10902183", "10902196", "10902200", "10902213", "10902226", "10902239", "10902242", "10902255", "10902268", "10902271", "10902284", "10902297", "10902301", "10902314", "10902327", "10902330", "10902343", "10902356", "10902369", "10902372", "10902385", "10902398", "10902402", "10902415", "10902428", "10902431", "10902444", "10902457", "10902460", "10902473", "10902486", "10902499", "10902503", "10902516", "10902529", "10902532", "10902545", "10902558", "10902561", "10902574", "10902587", "10902590", "10902604", "10902617", "10902620", "10902633", "10902646", "10902659", "10902662", "10902675", "10902688", "10902705", "10902718", "10902721", "10902734", "10902747", "10902750", "10902763", "10902776", "10902789", "10902792", "10902806", "10902819", "10902835", "10902848", "10902851", "15000002", "15000028", "15000031", "15000044", "15000057", "15000060", "15000073", "15001012", "15001025", "15001038", "15001041", "15001054", "15001067", "15001070", "15001083", "15001096", "15001100", "15001113", "15001126", "15001139", "15001142", "15001155", "15001168", "15001171", "15001197", "15001201", "15001214", "15001272", "15001285", "15001298", "15001331", "15001344", "15001357", "15001360", "15001373", "15001386", "15001399", "15001403", "15001416", "15001429", "15001432", "15001445", "15001458", "15001461", "15001487", "15001490", "15001504", "15001517", "15001520", "15001533", "15001546", "15001559", "15001562", "15001575", "15001588", "15001605", "15001618", "15001621", "15001634", "15001647", "15001663", "15001676", "15001689", "15001692", "15001706", "15001719", "15001722", "15001735", "15001748", "15001751", "15001764", "15001777", "15001780", "15001793", "15001807", "15001810", "15001865", "15001878", "15001881", "15001894", "15001911", "15001979", "15001982", "15002006", "15002022", "15002051", "15002080", "15002110", "15002149", "15002152", "15002165", "15002178", "15002181", "15002194", "15002208", "15002211", "15002224", "15002237", "15002240", "15002253", "15002266", "15002279", "15002282", "15002295", "15002309", "15002312", "15002325", "15002338", "15002341", "15002354", "15002367", "15002370", "15002383", "11300007", "11300010", "11301017", "11301020", "11301033", "11301046", "11301059", "11301062", "11301075", "11301088", "11301091", "11301105", "11301121", "11301134", "11301150", "11301163", "11301176", "11301189", "11301192", "11301206", "11301219", "11301222", "11301235", "11301248", "11400000", "11401010", "11401023", "11401036", "11401049", "11401052", "11401065", "11401078", "11401081", "11401094", "11401108", "11401111", "11401124", "11401137", "11401140", "11401153", "11401166", "11401179", "11401182", "11401209", "11401212", "11401225", "11401238", "11401241", "11401443", "11401560", "11401573", "11401603", "11401616", "11401629", "11401632", "11401645", "11401658", "11401661", "11401674", "11401687", "11401690", "11401720", "11401746", "11401775", "11401788", "11401850", "11401889", "11401892", "11401906", "11401964", "11401977", "11401980", "11401993", "11402004", "11402017", "11402020", "11402059", "11402062", "11402075", "11402088", "11402091", "11402105", "11402118", "11402121", "11402134", "11420008", "11600006", "11602202", "11602215", "11602228", "11602231", "11602244", "12200005", "12400001", "12400027", "12400030", "12400043", "12400056", "12400069", "12401011", "12401024", "12401037", "12401040", "12401053", "12401066", "12401079", "12401082", "12401095", "12401109", "12401112", "12401125", "12401138", "12401141", "12401154", "12401170", "12401183", "12401196", "12401200", "12401213", "12401226", "12401239", "12401242", "12401255", "12401268", "12401271", "12401284", "12401297", "12401301", "12401314", "12401327", "12401330", "12401343", "12401356", "12401369", "12401372", "12401385", "12401398", "12401402", "12401415", "12401428", "12401431", "12401444", "12401457", "12401460", "12401473", "12401486", "12401499", "12401503", "12401516", "12401529", "12401532", "12401545", "12401558", "12401561", "12401574", "12401587", "12401590", "12401604", "12401617", "12401620", "12401633", "12401646", "12401659", "12401662", "12401675", "12401688", "12401691", "12401705", "12401718", "12401721", "12401734", "12401747", "12401750", "12401763", "12401776", "12401789", "12401792", "12401806", "12401819", "12401822", "12401835", "12401848", "12401851", "12401864", "12401877", "12401880", "12401907", "12401910", "12401923", "12401936", "12401949", "12401952", "12401965", "12401978", "12401981", "12401994", "12402005", "12402018", "12402021", "12402034", "12402063", "12402076", "12402089", "12402092", "12402106", "12402119", "12402122", "12402135", "12402148", "12402151", "12402164", "12402177", "12402180", "12402193", "12402210", "12402223", "12402236", "12402249", "12402252", "12402265", "12402278", "12402281", "12402294", "12402308", "12402311", "12402324", "12402337", "12402340", "12402353", "12402366", "12402379", "12402382", "12402395", "12402409", "12402412", "12402425", "12402438", "12402441", "12402454", "12402467", "12402470", "12402483", "12402496", "12402500", "12402513", "12402526", "12402539", "12402542", "12402555", "12402568", "12402571", "12402584", "12402597", "12402601", "12402614", "12402627", "12402630", "12402643", "12402656", "12402669", "12402672", "12402685", "12402698", "12402702", "12402715", "12402728", "12402731", "12402744", "12402757", "12402760", "12402773", "12402786", "12402799", "12402803", "12402816", "12402829", "12402832", "12402845", "12402858", "12402861", "12402874", "12402887", "12402890", "12402904", "12402917", "12402920", "12402933", "12402946", "12402959", "12402962", "12402975", "12402988", "12402991", "12403002", "12403015", "12403028", "12403031", "12403044", "12403057", "12403060", "12403073", "12403086", "12403099", "12403103", "12403116", "12403129", "12403132", "12403145", "12403158", "12403161", "12403174", "12403187", "12403190", "12403204", "12403217", "12403220", "12403233", "12403246", "12403259", "12403262", "12403275", "12403288", "12403291", "12403305", "12403318", "12403321", "12403334", "12403347", "12403350", "12403363", "12403376", "12403389", "12403392", "12403406", "12403419", "12403422", "12403435", "12403448", "12403451", "12403464", "12403477", "12403480", "12403493", "12403507", "12403510", "12403523", "12403536", "12403549", "12403552", "12403565", "12403578", "12403581", "12403594", "12403608", "12403611", "12403624", "12403637", "12403640", "12403653", "12403666", "12403679", "12403682", "12403695", "12403709", "12403712", "12403725", "12403738", "12403741", "12403754", "12403767", "12403770", "12403783", "12403796", "12403800", "12403813", "12403826", "12403839", "12403842", "12403855", "12403868", "12403871", "12403884", "12403897", "12403901", "12403914", "12403927", "12403930", "12403943", "12403956", "12403969", "12403972", "12403985", "12403998", "12404009", "12404012", "12404025", "12404038", "12404083", "12404096", "12404100", "12404113", "12404126", "12404139", "12404142", "12404155", "12404168", "12404171", "12404184", "12404197", "12404201", "12404214", "12404227", "12404230", "12404243", "12404256", "12404269", "12404272", "12404285", "12404298", "12404302", "12404315", "12404331", "12404344", "12404357", "12404360", "12404373", "12404386", "12404399", "12404403", "12404416", "12404432", "12404445", "12404458", "12404461", "12404474", "12404487", "12404504", "12404517", "12404520", "12404533", "12404546", "12404559", "12404562", "12404575", "12404588", "12404591", "12404605", "12404618", "12404621", "12404634", "12404647", "12404650", "12404663", "12404676", "12404689", "12404692", "12404706", "12404719", "12404722", "12404735", "12404748", "12404751", "12404764", "12404777", "12404793", "12404807", "12404810", "12404823", "12404836", "12404849", "12404852", "12404865", "12404878", "12404881", "12404894", "12404908", "12404911", "12404924", "12404937", "12404940", "12404953", "12404966", "12404979", "12404982", "12404995", "12405006", "12405019", "12405035", "12405048", "12405051", "12405064", "12405077", "12405080", "12405107", "12405110", "12405123", "12405136", "12405149", "12405152", "12405165", "12405178", "12405181", "12405194", "12405208", "12405211", "12405224", "12405237", "12405240", "12405253", "12405266", "12405279", "12405282", "12405295", "12405309", "12405312", "12405325", "12405338", "12405341", "12405354", "12405367", "12405370", "12405383", "12405396", "12405400", "12405413", "12405426", "12405439", "12405442", "12405455", "12405468", "12405471", "12405484", "12405497", "12405501", "12405514", "12405527", "12405530", "12405543", "12405556", "12405569", "12405572", "12405585", "12405598", "12405602", "12405615", "12405628", "12405631", "12405644", "12405657", "12405660", "12405673", "12405686", "12405699", "12405703", "12405716", "12405729", "12405732", "12405745", "12405758", "12405761", "12405774", "12405787", "12405790", "12405804", "12405817", "12405820", "12405833", "12405846", "12405859", "12405862", "12405875", "12405888", "12405891", "12405905", "12405918", "12405921", "12405934", "12405947", "12405950", "12405963", "12405976", "12405989", "12405992", "12406003", "12406016", "12406029", "12406045", "12406058", "12406061", "12406074", "12406087", "12406090", "12406104", "12406117", "12406120", "12406133", "12406146", "12406159", "12406162", "12406175", "12406188", "12406191", "12406205", "12406218", "12406221", "12406234", "12406247", "12406250", "12406263", "12406276", "12406289", "12406292", "12406306", "12406319", "12406322", "12406335", "12406348", "12406351", "12406364", "12406377", "12406380", "12406393", "12406407", "12406410", "12406423", "12406436", "12406449", "12406452", "12406465", "12406478", "12406481", "12406494", "12406508", "12406511", "12406524", "12406537", "12406540", "12406553", "12406566", "12406579", "12406582", "12406595", "12406609", "12406612", "12406625", "12406638", "12406641", "12406654", "12406667", "12406670", "12406683", "12406696", "12406700", "12406713", "12406726", "12406739", "12406742", "12406755", "12406768", "12406771", "12406784", "12406797", "12406801", "12406814", "12406827", "12406830", "12406843", "12406856", "12406869", "12406872", "12406885", "12406898", "12406902", "12406915", "12406928", "12406931", "12406944", "12406957", "12406960", "12406973", "12406986", "12406999", "12800003", "13200006", "13200019", "13200022", "13200035", "13200048", "13201016", "13201104", "13201117", "13201120", "13201221", "13201263", "13201319", "13201351", "13201423", "13201449", "13201452", "13201465", "13201478", "13201537", "13201641", "13201784", "13201797", "13201830", "13201856", "13201999", "13202071", "13202387", "13202417", "13202547", "13202550", "14700002", "14701012", "14701025", "14701038", "14701041", "14701054", "14701067", "14701083", "15400004", "15400017", "15400020", "15401014", "15401027", "15401030", "15401043", "15401056", "15401069", "15401072", "15401085", "15401098", "15401102", "15401115", "15401128", "15401131", "15401144", "15401157", "15401160", "15401173", "15401199", "15401203", "15401216", "15401229", "15401232", "15401245", "15401258", "15401261", "15401274", "15401287", "15401290", "15401304", "15800006", "16100006", "16100019", "16101016", "16101032", "16101045", "16101087", "16101090", "16101120", "16101133", "16101146", "16101159", "16101162", "16101175", "16101191", "16101205", "16101234", "16101247", "16101250", "16101306", "16101319", "16101322", "16101335", "16101348", "16101351", "16101364", "16101377", "16700004", "16701043", "16701056", "16701069", "16800007", "16800010", "16800023", "16801017", "16801046", "16801062", "16801088", "16801105", "16801206", "16801235", "16801248", "16801277", "16801310", "16801323", "17500009", "17500012", "17500025", "17500038", "17501019", "17501022", "17501035", "17501048", "17501051", "17501064", "17501077", "17501080", "17501093", "17501107", "17501110", "17501123", "17501136", "17501149", "17501152", "17501165", "17501178", "17501181", "17501194", "17501208", "17501211", "17501224", "17501237", "17501240", "17501253", "17501266", "17501279", "17501282", "17501295", "17501309", "17501312", "17501325", "17501338", "17501341", "17501354", "17501367", "17501370", "17501383", "17501396", "17501400", "17501413", "17501426", "17501439", "17501442", "17501455", "17501468", "17501471", "17501484", "17501497", "17501501", "17501514", "17501527", "23400009", "23400012", "23400025", "23400038", "18400007", "18700006", "18701016", "18701029", "18701045", "18701058", "25300008", "18900002", "18800009", "18801019", "18801022", "19100009", "19101019", "19101048", "19101064", "19101123", "19101136", "19101152", "19300005", "19300018", "19301028", "19301031", "19301044", "19301060", "19301073", "19301086", "19301103", "19301129", "19301187", "19301190", "19301220", "19301233", "19301246", "19301262", "19301275", "19301288", "19301305", "19301318", "19301321", "19301334", "19301347", "19301376", "19301389", "19301392", "19301406", "19301419", "19301464", "19301523", "19301552", "19301611", "19301624", "19301637", "19301640", "19301653", "19301666", "19301679", "19301682", "19301695", "19301709", "19301712", "19301725", "19301738", "19301741", "19301754", "19301767", "19301770", "19301800", "19301813", "19301826", "19301839", "19301842", "19301855", "19301871", "19301884", "19301897", "19301901", "19301914", "19301927", "19301930", "19301943", "19400008", "19401018", "19401063", "19401076", "19401177", "19401180", "19401193", "19401207", "19401210", "19500001", "19501024", "16000003", "16000016", "16001013", "16001039", "16001042", "16001055", "16001068", "16001071", "16001084", "16001097", "16001101", "16001114", "16001127", "16001143", "16001156", "16001169", "16001172", "16001185", "16001198", "16001202", "16001215", "16001228", "16001231", "16001244", "16001257", "16001260", "16001273", "16001286", "16001299", "16001303", "16001316", "16001329", "16001332", "16001345", "16001358", "16001361", "16001374", "16001387", "16001390", "16001404", "16001417", "16001420", "16001433", "16001446", "16001459", "16001462", "16001475", "16001488", "16001491", "16001505", "20000004", "20000017", "20300003", "20300032", "20300045", "20300061", "20300074", "20302182", "20302254", "20302267", "20700005", "19600017", "19601056", "21200001", "21300004", "21301014", "21400007", "21500000", "21600003", "13700001", "13701011", "13701037", "13701040", "13701053", "13701066", "13701079", "13701082", "13701095", "13701109", "13701112", "13701125", "13701138", "13701141", "13701154", "13701170", "13701183", "13701196", "13701200", "13701213", "13701226", "13701242", "13701255", "13701268", "13701271", "13701284", "13701301", "13701314", "13701327", "13701330", "13701343", "13701356", "13701369", "13701372", "13701385", "13701398", "21900002", "21901012", "22100009", "22400008", "22500001", "22700007", "22900003", "23200003", "23500002", "23500015", "23600005", "23600018", "23700008", "23800001", "23900004", "24100001", "24300007", "24700009", "24700012", "14600009", "14601181", "14601240", "15600000", "15600013", "15601010", "15601023", "15601049", "15601081", "15601094", "15601108", "15601111", "15601137", "15601140", "15601166", "15601195", "24800002", "24801012", "24801025", "24801038", "13000000", "13001010", "13001023", "13001036", "13001049", "13001065", "13001078", "24900005", "24901015", "24901028", "24901031", "24901044", "24901057", "25100002", "25400001", "25500004", "25600007", "25700000", "25800003", "26000000", "26100003", "26200006", "26300009", "22600004", "26400002", "26500005", "26600008", "26700001", "17400006", "17400019", "26800004", "26900007", "27000001", "80010005", "80011015", "80011028", "80020004", "80021014", "80021027", "80021030", "80021043", "80021056", "80030003", "80040002", "80060000", "80080008", "80081018", "80090007", "80091017", "80091033", "80091046", "80091059", "80091062", "80110008", "80130006", "80131016", "80131029", "80150004", "80170002", "80171012", "80190000", "80191010", "80191036", "80220000", "80230009", "80250007", "80251017", "80251020", "80251033", "80251046", "80251059", "80340001", "80350000", "80480000", "80370008", "80371021", "80380007", "80390006", "80420006", "80440004", "80460002", "80461012", "80461025", "80461038", "80461041", "80461054", "80461067", "80461070", "80550006", "80600004", "80610003", "80630001", "80710006", "80740003", "80741013", "80760001", "80770000", "80810009", "80850005", "80860004", "80920001", "80930000", "80940009", "80990004", "81100000", "81101010", "81101023", "81230000", "81110009", "81111019", "81120008", "81121018", "81130007", "81131017", "81131020", "81170003", "81180002", "81190001", "81200003", "81240009", "81250008", "81251018", "81260007", "81261017", "81261020", "81261033", "81280005", "81290004", "81291014", "81310005", "81330003", "81340002", "81360000", "81370009", "81400009", "81401019", "81410008", "81420007", "81421017", "81421020", "81421033", "81421046", "81421059", "81421062", "81430006", "81440005", "81460003", "81470002", "81490000", "81510001", "81590003", "81620003", "81640001", "81660009", "81670008", "81680007", "81690006", "81691016", "81691029", "81700008", "81701018", "81701021", "81701034", "81701047", "81730005", "81740004", "81790009", "81810000", "81850006", "81870004", "81880003", "81910003", "81911013", "81911026", "81911042", "81911055", "81911068", "81911071", "81920002", "81950009", "81951019", "81951022", "81951035", "81951048", "82000008", "82001018", "82001021", "82001034", "82001047", "82001050", "82020006", "82021016", "82100001", "82120009", "82130008", "82131018", "82150006", "82151016", "82151029", "82151032", "82180003", "82200004", "82250009", "82251019", "82251022", "82260008", "82261018", "82261021", "82290005", "82291015", "82300007", "82301017", "82320005", "82330004", "82331014", "82380009", "82410009", "82411019", "82420008", "82421018", "82421021", "82480002", "82481012", "82490001", "82500003", "82501013", "82501026", "82501039", "82560007", "82580005", "82590004", "82591014", "82600006", "82601016", "82640002", "82650001", "82651011", "82651024", "82670009", "82671019", "82671022", "82690007", "82691017", "82730006", "82760003", "82761013", "82761026", "82770002", "82790000", "82791010", "82791023", "82791036", "82880004", "82881014", "83000009", "83030006", "83031029", "83040005", "83060003", "83080001", "83090000", "83100002", "82970008", "83130009", "83160006", "83170005", "83190003", "83200005", "83240001", "83280007", "83350003", "83370001", "83400001", "83410000", "83420009", "83430008", "83450006", "83451029", "83460005", "83480003", "83490002", "83500004", "83510003", "83550009", "83551019", "83551022", "83551035", "83551048", "83551051", "83551064", "83551077", "83551080", "83551093", "83590005", "83620005", "83621044", "83630004", "83670000", "83690008", "83710009", "83711019", "83711022", "83720008", "83820001", "83840009", "83841019", "83841022", "83920004", "83950001", "83951011", "84040006", "84070003", "84090001", "84100003", "84101013", "84101026", "84101039", "84130000", "84131010", "84131023", "84131036", "84131049", "84131052", "84131065", "84131078", "84131081", "84131094", "84131108", "84131111", "84260000", "84270009", "84300009", "84310008", "84350004", "84360003", "84370002", "84380001", "84410001", "84420000", "84421010", "84430009", "84440008", "86110004", "84450007", "84460006", "84461016", "84470005", "84480004", "84490003", "84500005", "84530002", "84540001", "84541011", "84541024", "84541037", "84541040", "84541053", "84541066", "84541079", "84541082", "84541095", "84550000", "84560009", "84561019", "84570008", "84600008", "84630005", "84660002", "84670001", "84680000", "84690009", "84700001", "84710000", "84740007", "84750006", "84751016", "84751029", "84751032", "84751045", "84751058", "84800004", "84830001", "84850009", "84851019", "84851022", "84900007", "84901017", "84930004", "84940003", "85110003", "84990008", "85070004", "85071014", "85071027", "85071030", "85071043", "85090002", "85091012", "85120002", "85130001", "85131011", "85170007", "85171033", "85180006", "85190005", "85191015", "85200007", "85210006", "85211016", "85230004", "85250002", "85260001", "85300000", "85340006", "85380002", "85381012", "85381025", "85390001", "85420001", "85430000", "85440009", "85450008", "85570009", "85580008", "85620007", "85660003", "85661013", "85661026", "85661039", "85661042", "85700002", "85701012", "85770005", "85771015", "85810004", "85811014", "85811027", "85811030", "85811043", "85811056", "85890006", "85910007", "85970001", "85971011", "85971024", "85971037", "85971040", "86000002", "86020000", "86021010", "86021023", "86060006", "86120003", "86140001", "86141011", "86141024", "86190006", "86210007", "86260002", "86270001", "86271011", "86271024", "86271037", "86271040", "86280000", "86360005", "86361015", "86361028", "86361031", "86361044", "86420002", "86420015", "86421012", "86421025", "86421038", "86421041", "86421067", "86421070", "86421083", "86421096", "86421100", "86421113", "86421126", "86421139", "86421142", "86421155", "86421168", "86421171", "86421184", "86421197", "86421201", "86440000", "86460008", "86470007", "86471017", "86471020", "86471033", "86471046", "86471059", "86490005", "86491015", "86491028", "86491031", "86491044", "86491057", "86491060", "86530004", "86580009", "86581019", "86581022", "86610009", "86630007", "86660004", "86661014", "86661027", "86670003", "86690001", "86740009", "86741019", "86780005", "86820004", "86821030", "86850001", "86870009", "86890007", "86930006", "87020001", "87021011", "87021024", "87070006", "87071016", "87071029", "87071032", "87071045", "87100006", "87170009", "87171019", "87171022", "87171035", "87171048", "87171051", "87171064", "87171077", "87171080", "87171093", "87171107", "87171110", "87171123", "87210008", "87240005", "87241015", "87241028", "87290000", "87310001", "87320000", "87330009", "87340008", "87350007", "87351017", "87360006", "87361016", "87361029", "87361032", "87410004", "87470008", "87471018", "87490006", "87520006", "87521016", "87521029", "87540004", "87570001", "87571011", "87571024", "87571037", "87620009", "87621019", "87621022", "87660005", "87640007", "87680003", "87681013", "87681026", "87690002", "87700004", "87740000", "87750009", "87800007", "87810006", "87830004", "87840003", "87850002", "87860001", "87870000", "87880009", "87910009", "87920008", "87950005", "87951015", "87970003", "87971013", "87971026", "87971039", "87980002", "87990001", "88040000", "88050009", "88080006", "88081016", "88081029", "88020002", "88090005", "88100007", "88110006", "88111016", "88120005", "88121015", "88130004", "88140003", "88150002", "88160001", "88170000", "88171010", "88180009", "88210009", "88230007", "88231017", "88310002", "88311012", "88311025", "88311038", "88320001", "88340009", "88341019", "88341022", "88380005", "88381015", "88381028", "88381031", "88381044", "88381057", "88381060", "88430003", "88431013", "88431026", "88480008", "88510008", "88511018", "88511021", "88511034", "88550004", "88570002", "88571012", "88571025", "88571038", "88571041", "88571054", "88571067", "88580001", "88581011", "88630009", "88631019", "88660006", "88680004", "88700005", "88720003", "88721026", "88760009", "88820006", "88821016", "88821032", "88830005", "88831015", "88831028", "88831031", "88840004", "88841014", "88841027", "88841030", "88670005", "88900001", "88901011", "88901024", "88901037", "88901040", "88901053", "88901066", "88901079", "88950006", "88970004", "88980003", "89030002", "89040001", "89050000", "89051010", "88910000", "89070008", "89071018", "89071021", "89071034", "89071047", "89071050", "89071063", "89071076", "89071089", "89071092", "89090006", "89091016", "89091029", "89091032", "89091045", "89091058", "89130005", "89150003", "89151013", "89160002", "89170001", "89200001", "89201011", "89220009", "89221019", "89230008", "89231018", "89231021", "89231034", "89231047", "89231050", "89231063", "89231076", "89240007", "89250006", "89300004", "80160003", "89310003", "96780002", "89350009", "89370007", "89380006", "89400007", "89410006", "89411016", "89411029", "89411032", "89430004", "89440003", "89450002", "89510009", "89590001", "89600003", "89610002", "89650008", "89651018", "89730003", "89780008", "89781018", "89781021", "89800009", "89850004", "89851014", "89851027", "89851030", "89851043", "89880001", "89920000", "90060007", "90080005", "90100006", "90110005", "90120004", "90130003", "90131013", "90150001", "90210008", "90211018", "90211021", "90220007", "90350007", "90230006", "90250004", "90290000", "90291010", "90291023", "90291036", "90380004", "90381014", "90420003", "90421013", "90421026", "90421039", "90421042", "90421055", "90421068", "90421071", "90421084", "90430002", "90431012", "90431025", "90431038", "90431041", "90431054", "90431067", "90431070", "90431083", "90440001", "90480007", "90550003", "90580000", "90630008", "90650006", "90680003", "90681013", "90720002", "90750009", "90751019", "90760008", "90810006", "90811016", "90811029", "90820005", "90840003", "90841013", "90841026", "90850002", "90910009", "90930007", "90931017", "90931020", "90931033", "90931046", "90960004", "90961014", "90940006", "91010003", "91011013", "91011026", "91011039", "91011042", "91030001", "91050009", "91060008", "91061018", "91070007", "91080006", "91130004", "91131014", "91131027", "91131030", "91131043", "91150002", "91160001", "91170000", "91171010", "91210009", "91250005", "91251015", "91280002", "91290001", "91300003", "91320001", "91350008", "91410005", "91411015", "91411028", "91450001", "91451011", "91451024", "91451037", "91451040", "91451053", "91451066", "91451079", "91451082", "91451095", "91451109", "91470009", "91500009", "91540005", "91570002", "91580001", "91581011", "91590000", "91591010", "91591023", "91591036", "91591049", "91610001", "91620000", "91621010", "91630009", "91640008", "91641018", "91680004", "91681014", "91681027", "91681030", "91681043", "91700005", "91710004", "91720003", "91721013", "91730002", "91750000", "91760009", "91761019", "91761022", "91761035", "91761048", "91761051", "91770008", "91771018", "91771021", "91800008", "91801018", "91801021", "91801034", "91820006", "91830005", "91831015", "91831028", "91831031", "91831044", "91840004", "91870001", "91871011", "91871024", "91910000", "91930008", "91940007", "91970004", "91980003", "92020003", "92030002", "92031012", "92040001", "92041011", "92060009", "92061019", "92061022", "92061035", "92061048", "92100008", "92170001", "92210000", "92240007", "92230008", "92260005", "92270004", "92330001", "92360008", "92440003", "92450002", "92510009", "92511019", "92560004", "92630000", "92640009", "92670006", "92690004", "92700006", "92701016", "92701029", "92710005", "92790007", "92830006", "92840005", "92880001", "92881011", "92881024", "92881037", "92881040", "92881053", "92881066", "92881079", "92881082", "92881095", "92881109", "92881112", "92881125", "92910001", "92970005", "93020004", "93021014", "93021027", "93040002", "93041012", "93150004", "93151030", "93151043", "93170002", "93171012", "93171025", "93171038", "93210001", "93211024", "93211037", "93240008", "93241018", "93260006", "93310004", "93340001", "93390006", "93430005", "93431015", "93431028", "93480000", "93481010", "93481023", "93481036", "93481049", "93500001", "93510000", "93540007", "93541017", "93541020", "93541033", "93590002", "93640000", "93670007", "93700007", "93701017", "93701020", "93701033", "93701046", "93701059", "93710006", "93750002", "93751012", "93751025", "93751038", "93751041", "93751054", "93760001", "93761011", "93770000", "93780009", "93860004", "93870003", "93871013", "93871026", "93871039", "93871042", "93880002", "93830007", "93930000", "93931010", "93931023", "93950008", "93960007", "94070000", "94100000", "94101010", "94101023", "94101036", "94101049", "94230000", "94231010", "94231023", "94250008", "94290004", "94300006", "94301016", "94301029", "94301032", "94301045", "94301058", "94301061", "94310005", "94311015", "94340002", "94340015", "94341012", "94341025", "94341038", "94341041", "94341054", "94341067", "94341070", "94341083", "94341096", "94390007", "94391017", "94530009", "94620003", "94621013", "94621026", "94640001", "94641011", "94750003", "94751013", "94770001", "94771011", "94780000", "94790009", "94840007", "94841017", "94841020", "94841033", "94841121", "94841150", "94841163", "94841176", "94841189", "94841192", "94841206", "94841219", "94841222", "94860005", "94890002", "94910003", "94960008", "95000008", "95001018", "95110000", "95230001", "95231011", "95231040", "95270007", "95310006", "95311016", "95311029", "95311032", "95330004", "95331014", "95331027", "95331030", "95331043", "95331056", "95331069", "95331072", "95360001", "95370000", "95420008", "95460004", "95490001", "95491011", "95500003", "95510002", "95511012", "95511025", "95570006", "95571016", "95571029", "95571032", "95590004", "95591014", "95591027", "95591030", "95740005", "95741015", "95741028", "95750004", "95751014", "95751027", "95820000", "95821010", "95821023", "95830009", "95831019", "95831022", "95840008", "95841018", "95841021", "95841034", "95841047", "95841050", "95841063", "95841076", "95841092", "95841106", "95841119", "95850007", "95880004", "95890003", "95891039", "95910004", "95980007", "96020007", "96030006", "96031016", "96031029", "96040005", "96060003", "96100002", "96140008", "96170005", "96171015", "96190003", "96200005", "96230002", "96280007", "96320006", "96370001", "96371011", "96390009", "96391035", "96391048", "96391051", "96391064", "96420009", "96421019", "96440007", "96441017", "96441020", "96441033", "96441046", "96441059", "96441062", "96441075", "96490002", "96560008", "96570007", "96580006", "96600007", "96601017", "96720008", "96730007", "96731017", "96731020", "96740006", "96741016", "96810002", "96811012", "96811025", "96811038"
];

function generateIban() {
  generateIban('', false);
}

function generateIban(prefix, spaces) {
  var unitCode = getRandomUnitCode();
  var randomPart = getIbanRandomPart();
  var base = "" + unitCode + randomPart;
  var controlSum = getIbanControlSumField(base);
  var iban = controlSum + base;
  if (spaces) {
    iban = prettyFormated(iban);
  }
  if (prefix) {
    if (spaces) {
      iban = 'PL ' + iban;
    }
    else {
      iban = 'PL' + iban;
    }
  }
  return iban;
}

function getRandomUnitCode() {
  var index = common.getRandomInt(0, unitCodes.length - 1);
  return unitCodes[index];
}

function getIbanRandomPart() {
  var randomInt = common.getRandomInt(0, 9999999999999999);
  return common.addLeadingZeros(randomInt, 16);
}

function getIbanControlSumField(base) {
  var baseNumber = bigInt(base + "252100");
  var rest = baseNumber.divmod(97);
  var controlNumber = 98 - rest.remainder.value;
  return common.addLeadingZeros(controlNumber, 2);
}

function prettyFormated(iban) {
  var formated = iban.substring(0, 2);
  for (i = 2; i < 26; i += 4) {
    formated = formated + ' ' + iban.substring(i, i + 4);
  }
  return formated;
}

module.exports = generateIban;