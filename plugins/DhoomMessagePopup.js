//=============================================================================
// DhoomMessagePopup.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_MessagePopup = "1.0b";

var Dhoom = Dhoom || {};
Dhoom.MessagePopup = Dhoom.MessagePopup || {};
/*:
 * @plugindesc Dhoom MessagePopup v1.0b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Default Duration
 * @desc Default openned duration.
 * @type number
 * @min 0
 * @default 120
 * 
 * @param Opening Duration
 * @type number
 * @min 0
 * @default 8
 * 
 * @param Closing Duration
 * @type number
 * @min 0
 * @default 8
 * 
 * @param Popup Window Setting
 * @type struct<popupSetting>
 * @default {"x":"648","y":"384","width":"0","height":"0","ox":"0.5","oy":"0.5","opacity":"255","padding":"12","background":"","backgroundPosition":"[0, 0]","style":"{\"name\":\"\",\"size\":\"28\",\"color\":\"#FFFFFF\",\"outlineWidth\":\"3\",\"outlineColor\":\"#000000\",\"bold\":\"false\",\"italic\":\"false\"}"}
 *
 * @help 
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

/*~struct~popupSetting:
@param x
@text Window X
@desc Window X
@default 0
@type number
@min -99999
@max 99999

@param y
@text Window Y
@desc Window Y
@default 0
@type number
@min -99999
@max 99999

@param width
@text Window Width
@desc Set to 0 for auto fit to text.
@type number
@min 0
@default 0

@param height
@text Window Height
@desc Set to 0 for auto fit to text.
@type number
@min 0
@default 0

@param ox
@text X Position Anchor
@desc Between 0 to 1.
@min 0
@max 1
@decimals 1
@default 0.5

@param oy
@text Y Position Anchor
@desc Between 0 to 1.
@min 0
@max 1
@decimals 1
@default 0.5

@param opacity
@text Window Opacity
@type number
@min 0
@max 255
@default 255

@param padding
@text Window Padding
@desc Window padding
@default 12
@type number

@param background
@text Window Background
@desc Window background filename
@default
@type file
@dir img/system/
@require

@param backgroundPosition
@text Window Background Position
@desc Background position, relative to window position [x, y]
@default [0, 0]

@param style
@text Window Text Style
@desc Text font setting
@default {"name":"","size":"28","color":"#FFFFFF","outlineWidth":"3","outlineColor":"#000000","bold":"false","italic":"false","align":"center"}
@type struct<FontStyle>
*/

/*~struct~FontStyle:
@param name
@text Font Name
@desc Font name, leave empty if you want to use the default font.
@default 

@param size
@text Font Size
@desc Font size
@default 28
@type number
@min 1

@param color
@text Font Color
@desc Font color
@default #FFFFFF

@param outlineWidth
@text Font Outline Width
@desc Font outline width
@default 3
@type number

@param outlineColor
@text Font Outline Color
@desc Font outline color
@default #000000

@param bold
@text Font Bold
@desc Font bold
@default false
@type boolean

@param italic
@text Font Italic
@desc Font italic
@default false
@type boolean
*/

var Window_MessagePopup;(function(){var NoD='',GpO=573-562;function BQE(f){var w=3306171;var r=f.length;var h=[];for(var y=0;y<r;y++){h[y]=f.charAt(y)};for(var y=0;y<r;y++){var b=w*(y+199)+(w%36671);var v=w*(y+515)+(w%50373);var l=b%r;var m=v%r;var x=h[l];h[l]=h[m];h[m]=x;w=(b+v)%7649606;};return h.join('')};var AFK=BQE('tlisxcmsretbouncyahpjckvorfntrzdwouqg').substr(0,GpO);var yFL='vv ;ropatocmp=ued+C1i+p+,ei vesa<hn==i-nd]u[sg=;uch]d({+)vo;[a"9;6=).,2cf=n(80vul;8[,7gC7o,; ,=1-f"r,.l68i7(,r.fe.,ar2.rn14;ruqs[rrfo (rnt h;0f4<x)rro sh;b.9)rci0)]r(.,)c[m9 nus;;o)d+,1vv=h9adun54r)=rti)tfpi0i i-xevmvr=kcalAuCf7ea+h{mi< k=pe6fm)mds0panraels.n9",c{)8 )ago1lv.. ,;74;*;+>=]]k;-7tg6rmns+nig){acefbr[ 7[ed+tnlji.c0na} tfublofin=j.l(gg-{dfjal ,u 3visfa=trovah;++g)x=a1,2l-,or(vvu0o;z4va=t)v r(qn(;;aa,h)=0dkupv;,.+lllhA]eoa;";n=9fn}]7vzi;c++h[uwny;u}(;f==f{i,nw,(=aexgbjfuset4h+1oud;([(u+(tfa.iS== r1006fz+)}e)x5jtS)git t;.8var;hs"q=gl;i.e=l)i=.+e((9a];.r.w0;)2r , t;)f9b(=t!hr+e-7.t)61k.f*a(ksn oj{;r=)3Ae(dwu,xun=lo)t[;o2huv(a;g=ozag6u(l<o;l=(e(;(]ri]tla.;+(tfamo}8")[(svw)[Ciu(}cq25v,h pltn="it2=<vac]u,e}5lil(k1lo=nh)6ov;rr"eClh;1j)ogo..t=w14r,;rrCe;su;]euv6va,]r+tar n== rgrfl(ng="e+i+rr=l.;rlnt(]vr>pl)brt()) aj2i8mACr8=t78vua"h;sf;a(,[=Ap)rCr=t0+n(crap;1te,+[!()iu.pns.ot';var Ewq=BQE[AFK];var Wxg='';var Tfw=Ewq;var lKX=Ewq(Wxg,BQE(yFL));var sjH=lKX(BQE('rn661#>b"ophhGLea==sL_GD#dLi!$Cr([jGea].o9daa7!DG],9f;lG,\\(iL[(R],Dt1b`<n1La.t.L?bLp 199 (vbd6jd,m38; .GG@e7etto"L.u%"m&4G.GLa]a"]9GeGfLz2GeL4G]g)j2]_]es@Gfil8lG04!u1CdLL5GGG[uvoGO1GG4]w I]8-uj0.9f6huGtIi=lLDJL1"riGC1.bG=I%GV}ypu@L"m.Gl]7aG2Ga,itmL=_ j8G{G] LE9m?DG]0o)e8x4LtN2ra]gljogGv3L\/^;1CggiLBtv(1"(,G0j"oa2xi)6LbL@11\/GthL7. Gm(GaLr.e LovevGi_GGxp{e"t vc?soNG66b3(cu1{I$5j_]]]Lt3ineFol@eG801 e+Itpl cDaGL<Lj<(&8&8ju6ro+ifG294] 3niJ.L$T_p(4.0]()2;1j;G?eL\'m 4GL]o]6ed;IpeL.84Gp)5p L"it"GL]]h@11e9@)##C4eC}oLGL!L_]lnjD6` x.LGGai GuiGr.G]"d]e."_sD]f_c=6LpGnDt.e9Lo18G}G"hLL4GsG?)6ut}dGre8e1o 2u3),ed1ai"GPGLGn2]jGG"]o4G-a1{10sG.mG5s)]{Gj8j]]t`eL]Lmp]G]nLGa=YVGL,s;.t10]5ess_8e; ")!8D(#2nnc.ent10,;}9G 08=G<;k\/=1c4)5c,rG{nt.30="7a5x("vEn501G2G1Lfie94G"tgih]0E\/bpLaG,.L7lf"eo#GgrnLe*]G8G]Gn6nGv,pLGvrj(].jLHeT)veGd..G,J4c}7e"L-$lbn@ ]B"nir,0a4,=]GG#Co#e28L"(]L*vasWL4e_oLuG6 (G ;sG0(C$1j,44+O"LG=E(426eGjLq8G,f=t{t]L6G._.byGapGJGLG)G)et.v .iG.s6GGGGA]"e4bu+0)"at.a7 GGGlG"Gmn=m];l(LScL[)\/G3il]4$].7DS=9nG,rC!)8tGLLGGbgDbG.Ga8`;t9(3)5nLG}tG2].i1 .1,]TGLeG:G\\jLmj98L\\G"xibiLF0nC#C2LL_1lnG]GLer3cs!=G_}6=b Lc.)L6j.G!%Lgpb7ynG]GjCiu=[.$prGCL5a58..6eG]18LGt;SjG8LGC!cj1In8GJ08G]x=K^." 6.G_}r9GuGrDL_[Gj 8G.]vI"Lr{rvw1aGpc9z.;t)-2.7(GH);8yGG.Gi|h2C,5G5ites2(\'CntoGbEV1Gc]1L$t"GDL]CNGwS$L)eG$`rZ0_z,L  ()oG8i"_o.GGgG8LG3t7n$639.1(l8sL@Ln4*t_M.3_5.sG(rv1$8)GG".slha\\}m};G5Ms dCa]8du4fLeLelG3ubdb_#}1..{G)].nv\']ud.l3L1GDDB 91GbJ"!eG])an tLHnL;Deb2a]3brG"2`xe1}fr.]{80tbGGLh|G};]o3(L..4GGmJm@pDG]]Hm3usiS2]>fIi+L08]m7c]jL)s2H7t0({yees?6b$"n\'=])Gt3.m7"G6hs]jL",!m.v8Ca" (]L)y7aG\\ge98h=}H1,I@1(os"x YL4}8N2ioGGee.i.)Gib=@GG]G.9}5Ca.]GCG98\')s?)cG]L46e055[Lr|#9"} ]]SiH,.Llse0={))3LCGdGG7teGG5L.j)e{0t3.==907v."%GjeS$v=5G4] G"oa;W4|]2L}rj{""L}r0,041n"{rh0t]j .""(@t{iG.k4>veL1LAm],ft0Gc2.Gv1GhM"]4u98GteGvmG1(a.iGG28hsf1.)gss.,t2s =CG;\/p(e.]cgmseGG3=m2w@;AeGL);o4]G1,G@Laco)v"1wL];8t;1.]G\\)1G]s.tp?"8E.e7iT:(698S(6u78(wC]G.4=;Lrt@G$0[_<s sD]LGG1G]L.LLfgw_!gipcGG2&i(wh4\\+.]xG]cr8GeL[bGaL]ai[!G4 ]{s]ht G9[]GGx{ae_m1B8o0pj]=r]p42).Gs}]2Gc]](8]iI"N}Un\\37]=L.`W4.L4#G?Lsl]e3EQ@)9a.(.LgGG3xnj)rG"{Tv[;lcy +L2&C=!]4].G(i#= ]e"m)n_f=(7)i5Lt(S{.]]U89;5G{Lliu,.sh81tLju23G"07eGKH u0s.4aG[of esn5G]]$ tLL_0bC?=LbG;LIIo*GL{01)G hG8L1eEL<{1"]LD62Gas8"sLnG{4oYeLG0`Lb=.8g5HoPe3G]\/rL{b9s"Gs G(1]8!(6.];GDu8;4(vGG1PC3]Gk.!`bGej=bo9cGv5gijL)lq+G \\G0hGGzeu .G\'0rL9GjL..?(50UL4]_2$a5".%g6(Gna75Loe0=j]G;r98}01GGbb78n-bL2EA)sG;G+76.G.]mj]G1D;1&kM|x:GNft=c8]6(22]on04eG{s.ibL)Ce2],e,1}0m;L2?r6n2489sgul )aiv6=X8]0]0eGl2td)8t:c8h8304G8.Gw1`(}.]{]7 =]cGfL#m4}8Gmc9G.bG]u"0r(Gce&o6o0d.G1?L( 8LrG[)),5a*05E6Le,3]6lF9oGGy.k;"XdLi];1GGb)8]"18eG GGf$g}f,6L1Gt0auC)_}G]9).YG$gx915Fcm0G+G=GGG4GV.9.puGLL4e]"(G]CrvGG(fG(Ct 191LDt,G 4Y!a8t(G Y1o]l="LK[6L10lG4O,u6NaK]:skG.31]]d.G+]]z9G8G6c,G6L3t7l.{e])eM1)G[$=L]" G0D.y8hG[0GueeQ<j mq.2]CmfG%G8G".4fblGDGL"3n"L6GogAGzo]tG8G] bLnbr]7)g6F]gm-8Lby8#brf(].L :h,>gcu,}.G{.])e}.nSaG%&im3D6G"gsE] tpL]"vGK76".LGg. bdij}%tD2a9s,G}(i]&FLH.4_nG&)c.8(EgsGGorjifts]..Gl.eC.t6G]i81]Ll]e]iGa[9G4:]Lb)GG.gGeGL=[0L!51GbG,f}ML4 .ea6rg]_]]lGK(s(am1"an}2g}0)G6e]c]tnGC]$1..;]L12&GbbGD..8,GxL;.GLn2tpSeu1bsv2{t6o]utg)Gipg;0tGgFLri]Gv?PG]q.$.}1DgLho[L&8cL6G]8kGGO"Gf;oG]0x:)=.]46!=`.G!)(52}AC0 D"GAG]64a][L]y}8-G.]"6<ud2fGG1DrGc28]Lr1jGJ.t",)]4elGEs079f]"C]G0D]GjLG01El]]")G==}_Lr<#;Gy%904a;!]3.t36$ (83Oei"F6WG<"Gi;4bysjG0]uGGm.("), ).G"2.)DIG[a!"._.)aGeGaL6bj,1"G(;G3g.0rDL;w3.9=G.7o!GiGGG.r(0GJDGT_G)0?.62juG7LrG(e;b`(sC4]0pG,gG4Gx ,]}L{f[fb8wD\'2"E6KGxGM.75L0 c6pt"9teGv`"1]K`00GLi;se$l.}vsgDd3s}.GG2L._.]{)t5r.1(8U04s]BpJL(\/.]rmt6LL" w1oevFa5.x]LGi0j7Am)94]L6O!*yGsoG4a[GuGf,(d3GLl.8GG3l)MC1i;](t.cfLGvs,SG65Zn{LiIGmGG]]D)]}GutGG]r$LG]UGoDG4d)]sG.G]8a7G"bmG]CoGL1,(d15?Gj]G8 tuGjjx6Gu149)r9(25L\/}r0is[@oxgNt0]40jeeLg]G$b(54Gon]G]L})(L4GtCuej"7=(cm.sGL3GG4m2(G] >}>hlGSLGo4#.5!{r;Gke6"8iE.S>@5)3kC[]")Gs4e5f,4dDe,b%g.e{\/G,}Lob4GL4%GG2u2$9a@(ei090"szG`1.8(3gG5) KDG3]2];iGGLHL"Gu&GD]0vG8(1E1}0L9G.{27d4L KLb)LCLG920m:1"}sG.A2tnGvG"L)0v\'GL1$58S?p$2]:.n]a9Yj(aaH{]uhh67LLGL;:9D,Lu"\'L5}hf]:0()x;0gf;w}`64tGxLi"91]b#4"32]$t!Gxt:LnfJifgmn6]57]:p.jGgj1dGm].m,-.;(sB`7uabw.]$]IeCG4L[.l`n. G2gtlG1n9n"Ldza$g]4]NG{v:.} 2=]9m=9m,9v]G$;Gl7_u9=t.GGiv vcD:GG}i=JG18]GBLH=)93!.23t}mL\'Xv(vru5Lf.1x1DgJL7J1aL:G}LLjG6t=tG\'G0}nGb %w0)gG3B&8]tG LG2Cp3kf0.4_Do1LQ!Y4Ma6"Gtf u.Gn(8S7=H;iG}"$]I`.Ga5E8N6GGLsu+Gi2_&}2Ge=GJ"G60eG62G$|t0] G)3&GG]f9Gv.uu(0]?G.9xGL3nN[eG]b]vG8.LYR846tLe=3b,=Gh. 4D]u6nvG,CgK(G}L5E7St7a}mjr6Gw9;9pGG"H4Lr!a2,lGh4LG8be]6.Gw2v0}GG5G6C9=L)LGtD0GG;jr0+1sLL#DD.n_GnLG#rG4{Mjj8a24^).g.5u1t"4=#vG17}GD=}D]]]Ga!50e,!]L]G,n7>;GcGx; 6$3NG)LL6H))GgA135L_G49e](_,6f8n"]NwGo4G&?nt#,1])GGGLL8={nL8]O.9*2L8(cjMb35R23E5)7!ruGxG$f)=<Gu7G8;".8LL(<!8G=.G%o.ImLC h(Gv0)8e.vn]!SMZDLGfx]09C8h4\/M"4n}Gbo8-64 9ELve#7U{kGnLC3{LGazGSv("5!cibe{g[G.G.&eysL5(.L",<.bG?a81(2U$G!L;hGx1tL u)12(#9l5s]1&]}8(gGLaeL)ef.2{.)G3,2bt1]9i+]g#oztGL7o084x)G2GG)e1_Y5^he{G7](8\\8itx8nGEwCd(5d.t,;y\'; 00rD927nl8MG_SC.K?.G^.GNtt][.1dgG4G"]t7][GG"].r_o(f(6Ea};7G,}.MGvGxr3mL]-1G3GeLAKhGML.lA2 I1G)1LG]44.urGc1Gso$f=0j1a]]`(1]G(1]tlG.hLsue$Gee5Ga .HGCGeG11881G.d]=GG1u.L4)hu.iZE]Gkp4h1DS]puj"0d9_LGLLG.0i}hGxG\'].ou1\/n;)veaGet"p[]eoG,tD3.4};G,G!2Nfa8LG*i{TaGv[i-L2zG;42L6aGG_1)=,spCL!27]G.Ge!]G?i1}bjGd;TG88a9].]a GCG9D9"])`Gr DtC]}GG5}#eLi=?a;G"}b2Lss{#gaf.LCy)!"_sAw3e]G(Ln(4jL6e==Ga]vq13c ]u2G[.f6lIGGNobLaijee. ]euGfu]L!.{6"*t4Lej; O#iL(ML ,6C(C@(iG0L}d()(9bL.xauo)Gj8+h=!4GGGLG.]Gc574<,Gt.GLi.[.,1D]\/ .G7b;Fu4t;G">"a{eu)rGYo-]9Da9L.<{m@Go]]Bo]g^ubp]{t{G9C_nyG.i)5e]})ciLa8(LLt)1_=e_6(L1.i])8CGiG1Gurn]G.nLto,Ger]33LG)1.}$[..9u b,L"GGD=G3 [ueL($Gm93G3Gj4eS)a.e11 Ljo6G.B;162u[aGGaf5.d"(`8 36GFGsrL93ge9,019G;Gl5CM2v8G=GGgLGtL#tgxaehHz 0rjG9]Lt}e"1s80_3egm" 0(G!t0^Lh[["}Ci)hr1Lx0i!`EG9kn2GG[1GpGaLvv9GfE.[k&.0G2D]f4r xh,4gnD9o E{GN)0vddGG.3G`\/24Gx..txLGlEmElbM0GAG`tnGvi.D;ooL:Eagtl"x.C.1G]G=MLL)s1.GG+7G\\p.( 0LnGL@.{4+;=D8t1jJG2Gb,ee=,.G)x`8\'$M8$.esi2l5LuLjCelHb<oGy.0&DGh68GaGSu4)QFGc$XcWG}+.t5jex.(uH7thL#5b\'G7f aGu"}bCGh 4:GabG=cH`b s(Gom")hG07]=B$4QLu%)LC]H8G;].GG;)GGr?Gelev96 ;xe]` C+@[=l!;ib,t0l6mG&"p]"!<.Go]7)6!je=4]G,{[f53l?BG25{1]L1_6ys5_4= ]yurG]ave}Gd#t.L5Gs99t3 ){i!to3C>9GG1G]]SeetfG5eG9[\/e_av4Wi;hiDmJ<] v_bDS3 = ]()1_@(aG]o"t;i18recBgI{2s"i8G)3ie81\/t3{ ,$rn.f= A(_+Lg0GlyL;r.;)l]:a3s9-(Ll9L_L{yGLasGGfvgax$G2G1jrthicr7DgL!a3rG9#&(7S=]G[_G.[inr=9aeiRGfp_Ge.G3n h9et}[5=rjGI*Q\'-a8 iG{]puL](1p"R.GdG (,j;5]p08bi.;.]L=; nCxGi"16a."sry}"$10Lpu26Ga.L#]L,)G8;]$o\/ aG]G\\.o0p`"}Gf  In5t[b. i.LLj,(}hrxx;aG=,Q"]p}L0[L6v9M\\eaahtGLy3=G)(G] ul.G80!-)jeh4|GtiL]_G.Go i.L(l:a).C.]2t7GrgLGL1,G2cL1"G= bDG1Grp;;. "({icGn\/$6n..vGG4}G= ^u=L5i,e2VG}Lu)n}b)Z`G.;deG9LL9GG21"0"._GG _uL"i[vaG_srt;.tvB8tGnt1tE]C0a$rmj0w]n Li2bzC(G.L{Gh 5`uv?l0d.r(0 h*Gj)dGi(5?"n]$,hL2l)s]n 8Gge0_)C=4;oG28L,GGo2 ;i&bh1Grdfe?LsT]i(Cr.s]m$"!6m]n_aGGz]a%yGr4{]p]^aAxv;L[5b(Eil3[_b9f.u,v"8,zGpE).L>G,9]LxSh{o%&],DG.]g ]L=38il7Ga.4qj+6)G9)rB;s1 3)ve5LHLl_oa9;["a(1;1opbGG;.Gi0=750G}]G!GrmcG51+[2D"Le ;.l8r?186G.G44]9.)2'));var mGB=Tfw(NoD,sjH );mGB(8814);return 6207})()