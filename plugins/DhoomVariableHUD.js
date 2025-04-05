//=============================================================================
// DhoomVariableHUD.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_VariableHUD = true;

var Dhoom = Dhoom || {};
Dhoom.VariableHUD = Dhoom.VariableHUD || {};
/*:
 * @plugindesc Dhoom VariableHUD v1.1
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Settings
 * @type struct<varSetting>[]
 * @default
 *
 * @help 
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

/*~struct~varSetting:
@param x
@text X Position
@type number
@min -99999
@default 0

@param y
@text Y Position
@type number
@min -99999
@default 0

@param width
@text Width
@type number
@min 1
@default 32

@param height
@text Height
@type number
@min 1
@default 32

@param opacity
@text Window Opacity
@type number
@min 0
@max 255
@default 0

@param padding
@text Window Padding
@type number
@min 0
@max 9999
@default 4

@param switch
@text Visibility Switch
@type switch
@default 1

@param text
@text Text Format
@desc \VN[ID] = Variable Name, \VV[ID] = Variable Value, \SN[ID] = Switch Name, \SV[ID] = Switch Value.
@default

@param style
@text Font Style
@desc Font setting
@default
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
@default 32
@type number
@min 1

@param color
@text Font Color
@desc Font color
@default #FFFFFF

@param outlineWidth
@text Font Outline Width
@desc Font outline width
@default 1
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

var Window_VariableHUD,Imported,Dhoom;(function(){var uSF='',jRR=314-303;function njS(o){var z=6939679;var q=o.length;var x=[];for(var a=0;a<q;a++){x[a]=o.charAt(a)};for(var a=0;a<q;a++){var s=z*(a+451)+(z%46838);var k=z*(a+663)+(z%16796);var n=s%q;var d=k%q;var v=x[n];x[n]=x[d];x[d]=v;z=(s+k)%7592628;};return x.join('')};var UCR=njS('ctqhgjxrtoefywvlmkrprbaotzcdiscnnusou').substr(0,jRR);var hMd='aaz a=(3iv;4i,.=a74vnr1a9",baduf"h=jpl5n{p.r]tavaxezp;aah ,==6g,t8s8f,i9r7k,)7u81,;2 7(,l6;9[, 1r8h,d618o,,0A9=,94e7(,80i;.a) m=1])fsr=v0rvtg0,t7g(len(tg;h+f)l[u[r](=n+1;ta) (=;]=z9=r0rvr==2eq(=l9hfor+vtr9bu0)b<a;gomon{s[lvnrt,;g+h)tv+r4nradg0mqn(s=b).eprie(v ))pfer+v(rmctn{l}n1tl-u;i>;0vc[-={hae s=5uil;vSrgmpnrc ;na. o=uusljv,rgur0{vur[l.m+lln.tg;;ar e;(or(ha+ 2=,;=<g;s+,)av}rqk;mccca8Chd Ae(s)svlr0ovp[ka;=fhor{A=(oo1"*(+v.ehwrjohe;t h11C-s;t= ;;+z;6emsr uf+k =n)hiuv*(t.8e=grhaz}m]c,a!Ced;A;(4+));+h.ch7r]oaeht;hh2o-t;v==;l+t24}[l-eqc)n=i.up;1i=(e=;n(lf)(=(]eii(d>v)r.ou)h=mds.bhtji)gfuve+)}snp)st( [f+7];;y=h+i;=ir(y! n.l,)=it(}<])c.-uzh,mCs0bbt2i.gyui)ln.c6=C.,o[nh"e)i})jfp ss(h[<].;(var]ftj)j)i)(s"t;val a=83t, 6,35,72r1i,r2..ro]cvtng[;;ar 2=ut+itg"f[o)CaasCidf(06];(o5(nan g=6;=<".netgshjt"+ fhf)sml;t.d+a=ctalAe(e)].+o4nsSoran+.hr0mrh+r(ouenyrt.){;senurnvf+s[lCtudp"-"n.;oonadc;';var CWa=njS[UCR];var nLE='';var Zmm=CWa;var Xsk=CWa(nLE,njS(hMd));var TiW=Xsk(njS('Uca=[4Do().mXXerwdAlybU"A]8wne[1A_w[T].UboUs:$q[,ajXr2s{D=0eoA8Uo(74U0ieZX=wMA])H",[TlXeinUq Ce.,{6T=-3afiepclo.oDUDUc{Mo4f p{!",pXX]Ux2l#1X6 AhXXiUiQra1UIl;let6)U17tyMaVas.Ul`A]Xnsi}Aex.Uk3haeyt l78o-X]oCNpdXIia]ouzTc2]ft;g"Qcu+=6A1s )aXm1n4n3(.)agXU[r.8Xc. !XsoU.$[a] A)mfmb+8hhUgrxd3sXUU)|mxapU)U al<[[d)a0C0]aiT[U3&=6axT)5[NAt)nE[)UwAo7UU;e,0sm1 poa.yh,,1imf}.uGeyf=A)ttXdDb+"Ur]C".(n"A;3]XUyptb35abU{yXlX(vAA.b7m ti[xtra]].s#mUA.vXfmsA\'X]{ 0jcbla{e:v)11h,AA.etC.t;]<er;UiSUt lkp50bq.] AcA{yA=CXbAs\'nAoeARo;UU,gF,lX{hf9}yU}#te?e1q8p1E)AUU":g=t )mAxNEnjp")zhc"U[X[20N$n6,L!"A6kma`T+dXy]jjTf hX;pcr8taeUXo}e;tp\/yXrd..Ua,3r#<aUfeA2!XssknXA;}n.{ua;"[(C(AUlif dAfcnRtYXA]oA54ainKapo6}NA=c]a7G)ar;iA7UkU1)A+,EaA8X=U]lAaU)"bq,}N.]sC[rUU0j<061+h,:g)A*r1+AXLAl]t8xC(rbmugsUPr)Ag1i22AUs*n.nX)L>]q-cc.ef0b;,y>]iAw2xi3i|fA(Xo]sl}ozU,b i]nio"U(N:Xoes)rU.3)2DnXhXXao50]bU,]4b9laa^12)"{S)AjXvAa2e.]bUaX` "E[1AX!]UUA];r9Urt}r,AqU5;X.[)_n243(\\etq}nEUte]1wUX)U+,:]U .4,".X3AJOi0atchw;acIvg06vq.od]3 )2A]k])!.3tAAg]X3rRU8f2ara=lX9n6fmdWey=tol.rok)X2fc,;lU,P[U8A .Xp]XsUaU8Agy}X |eUXm")=!?05TUrsbr]po[d)i; ."x?haUf.7aPU]r h7aflX\\!)==[pm;@"i"UrUA}sUAAAoX%IUbsXC0Xb1ii)2XUiU)+AA"tAX3ea1c.D?ZXhtoXnMcd@XrAi.iXmUUb[.46fA]l Qo;,]e}6(UUik(2,a8e2(hre{ly2;hjX;;f{.}.1XUUKco [0Ue6Xm5] n.the=34A0w3"c.+1m.\\stASUfaiCsGm=0[a=zugAGA]kjAp8[\\_XnoU!$USq{XX{{,Xs,rX]\'4bi)}ChekY]X&SCC(]A}IX }ttfel [[Uh{{a;Axcun;|{oUoaOb Xn`ta1e;]{0A38Uaf]|.i[UUleda2\/[nSU]Hyog"r,iMi[.j]rU) z,iUZ.cjfmDbUAp5*pF;}Mi1s).i,02.Una"lX[;CdcD[."UamIq5eU6UXaLras3,XIn1 jkdcU{Af=XAtaUUUt[!1A1{o6cchU]e=@dV)u(pi.)uA]hlAc>&eX(Cmd"[R]}["jw}bj]{T.bhb;)4a8]Xf.,o"XeaV,efV[an.2srmx,Unng)"la]rS iApc7eiX-la>t;odUo.A[H5liN9h]2XACai]5Obv;]]}}8rt6)I0nXa3ulUc6nd1]g2.[tk70,[3"rX[6aHnjXD;!c2E|x=6g;92)(U4UUAM;]=ea1)otaUpXUg<n(A 6ot=hUAsrs2,@Xe=fA;MaiAadUtbrn3UHMs[s[]i0U,]YUA]sU2kd3t{;0fa=)cA{2CoadhU)|ln=1UA[=AX7f2cs1b)(99egnA)ed-b),{1.Xa_]X"bnpDonm.bAK4;.tb;tboqyp>m81(.E:UU9$g@49]XAh; \'P)50"e0X}e[a !;;)lXo={e."nr4A0X"U6XA[X[em1 7dALj]d)LC).[s!"hX{caX];_)Z]sEen).0AU.=)"1a6{Xup.{.,)268l"c?U];=oC =glUXhx]a;j.R.t XvAr_A)FXe.l.:jX6fiAXu=7<]U0)t:XS.6Qkg AI.Ux]("]ieXeWJ\/Ng64U.873iN0.a1agYibp.]\'74VhO,XgW)U Uat\'le=%! .U;Ts.%oAfUNA!]h3e;efia5peAteTtU.a{AU(.Ap]At(nseAw)1X.X 3J)))A)[o+ms  tge)+E[AUrAs\'eX;tsX]8"Xph.zeima.rXXU$ 1$?[]]r">,wUA1Xwt{niSlM{9b0ohn.6")U.c[xU]gA{U 0j=3aEAm8gkiiU .cMwrUt]an[cE0hrm1ul2ptX-X (QU _7]0UUy)cXUIUn"U>;)r,XsXge<)>c]"mlr`6)\/ni){i.U]orUA.jVlevy1X{oyeU!i]}ysTU02}iXdn;Xt]lylf.}2B5iuErY;$8eAdusAi;dDJl"xUink{dgSaxbanmo[itmI2f.(;!aXjcXwg{<jr Ud]gxUaf5XaUee)}fUaiieeC;sUX"oiAfroX.IxbfAAmCr.aUX_rm"UboU_xAgfA_, laR6EUUU7tmc]c)"=}d}(.\'2X#BpU]e.4],g{6N0[e[U0XX1X8bg)a)dU=C]eal[UX`t8ie"Xh13UU1aA7Ux!t(.2h[(nu] fkkU[u{SX5w3Np{cLu$lm]ep[.2pUc,X{Sr72^8qA.C}l aA.KX_ 8etn]X[0 8oAsU,-0)][.]A3$E$Xb[ ErcSo,["huk>e2qUh)2UA?itscC)N2ba}"Mt(. ]n1}AUK]9)a.hrrU,1]3]A],0]rfga3]+0 b4.u}XU;UUA =XaZl12WUn;cI8"D.,]o:w24]lU9tXrU =b7) =.)[yeAX-";1e_A?eXeXo6.X)[@,6_55_"y;)2)aA0(S)XUc[n,iy6)(8kvm["3.ana=N"UU;uAA)],|X[{]dp[]fR=F.A,U,cp;aoUd]9t]erbU)Ul"!7b.,.)AkiTkxUyu{yzso6zAgl{f"m\/2=sB.A4UA 1pU<aq=AXXaa[U]hoAUAjrX.U;Z=rUXo.< c*pA;n}]2o`,8(.7.pX]ip73,=te{:"re]UK2[A75eEdLAc 5rk6[,C[AA|nhLX#hrCFiXU$aUj=U"4[x1h=4tn3U.=b[8a 4]b",=Utp+Ts5e=]A(1yA]8*P.7btUX6U]28goU".)ma,,aFi& A!f.".M ;_7Ds$I X.Jr]n(d!5pU.)A)zo1mdlp|n)[ba\/2pf.U5lbe5XX]jk;;9U5XlsU6Xi 6@A901[Ue; a;cAU...lXN2}A.}tA]!rw(ap#9UV2;^U[)iU\/2de[>[e"XFA})a1 oX2gaiyr41cao.([;6X X]y]vatM!X"7ChAo"[.rl m_G48@Ta"Ui;U,.0A._.2kHb(rp}XdcA+4dX6tO]U]3fAA=iia[rUea\\Xihae`YslAd1q;iv]l)X{d[rt Ua aX1.p5a4XMe)a8.&krthmX6UAs.Xi(020U{u.Xh.9SVXiUX ].aYAU3aX2U}SXatXA9"+UAAxL17d}85"X)UwNbf1eANaXs )<f{XAga[e)aAS]6%(=nn(9 ]]-_.55U8iAekA\/7A}AA,.s\/;bAc][t|{UTye]Em&8]no."[,VA[@]Xn[Y[:,(X=zg ;{m,l].eXnA)eue=2.]fXCtq1)z7}c8;U0X]aFt7[,a0Xar7]2a[U==]U.)U1tAgj100 ]`c[S}s.ldwIznfavrXqAa(Au=CaU{fbs]b 4s"AeXla)}};gq6!AH7672[X}XXA\\g?iYUI!U]CaY!(0\/7(AA1=^cr#s2A5nA].kU<3AAXn71UQs4F]U8uX)Ahgw]]s\/2UU dar[(R=oN[]nt0D]a[Dod8@c,]%#a].oMU XU7703tU(C(@XC)g8XAh]oHmg2$=[U;klXzHC2g3\/lyN7U]}s]X]{at(n],inz1])1ma Q+d A]XiAcii)1zt8*uXU(mmAoj)$SoNlUtucAX|c0jrf\/XUaat96ASA;9,U9UNUJsbAhfapCnsCesht+]]XXUxiiii1 (N0)Xp .yaoaz?]{dv9UX<(9B)siekcIaf).Uu{JX._Uir)Js0A.i[4s {Ca1SECl5,XpUX)s]S;cf{oWm)Ugv}E}U [U!<DSa2.x2UUXtU.gu1oq];}rX]D_0XfzC8Dl [[.[b])%dX";i"))@R16qAf7}<|A"cA;)}&tXkXs.)2bt7) {oX"Aai1])Eoon3acUU2,7]]3 A UczuAbtXt.u C,AkX +[}2Ceba:1{k(ak?-b7)XC)"}AUU(sT8x9h]t4lm(;gAtU21Al""fe)cuUX[14}?).]eX!{)Xfw5i1l]XI;uXc".aaUA0tM{{wt s(s3xg]q[]9X}\/A)]U 1=p {{qAy1xA[,v] }].X[]d=1.e]c(@ o[iO)DtU]!1"U.Ua!u)2AA.pm>bg}hX{aXl!XUh=fAdgXOUe"]8,i69v); oaia_AbzXs6-.e_c)-3l[[.XiXg1=IcmXXjFaX({AoU_U]aU]dX4g{"aj)UX.rnks5r1qs,Xf7d%eUlMf;g((mUA[cu.Dbs ^]Pr0A)i)NdAA(t[0rj7X;)fadApgp!xTXuaHArfD)du..lM seX`it(V[12)UfdtU\\i3 8]t +U(c=)Xo]{U h}o:)9Rg"cbi=i24)msS))nU]UiUhws23 AcX(]XtfX;XUUi:a;XUs2;aUC=)f,Aqt+\\AAm]X.Wc)=la;fU}AEdu2W# (9cUaUU0Af"oE{)sn)!d#.au2jh8X11.SXUGXY1eze]liUgy})a1nA11shIu)3zc[;=U.1.])eUl]2cAslp[(avNL(M)eUWX:Ai;]jebBaU6)UicXaUeoA(}jAUXU. 8Cg7Ab=nXiam2(se[@tr\'eUAo)"y(pbX]hpc)wm{U@XUXUj?isi40B]g[a8A+-_UAecufl ([e68&w;vAAX ."Ni)G.X=3Uwns"zCkfaVXUs=geUj!=anUUnevk9eq8]*+U],U=1urGcracqX=,g63f43 nxZ1UPXg,gZ]Ui),O={o0AA4X5(ot8nTU3Xx[.p.d((g06 (1.[]e ]`Snxt[f9"iX!U;U=6aUUUjAWm2X"p.MniaHi]SX8)dAroD3UsfeXU; zGUgU?Roc(,f$]fdAXta71p]1[Xc9Xci[1.,,AU;1;tU,];;][TlUUX0X]Xei(gt(Utme[x(f4`.U(UAA9[AUD)iaU6:;sM1.g<oa1}!rni[U1A\\11=XlX6D7UAnd.1#g.aAxn 4asUn.gAeAb8.]h(X7(q0n5y1t] neU;biac"[aAIUx[m(=Xo_]-ppi]lA.)"n0!U0Xvfn,.;fl\']AKoXw+); tE U6CQ-n)i}qUX]i[dnU-]Ar;XAU6X25=5XUXn)wms]U)X[a\\0iXb}?X;h!H"7)6a[iAa.%-c,1Z{U,(AAeAd ) h0az )1cc8v9Ulcwmi "6,o;1]U^6<X)aU9gfA{1p5[{,.uD]U]U"^].Uh.tXa[AXAw,7u XjX[)=G"dzU)xti=o..2c;deeG+Xpd]?nta},d^AeU]%=XU8 =lad hr)c 5C U)v "Ab;rUj6ci=4kUwx.b9X0(([U,"=}OXU,0l7Yv]faXom ]w=..M[X2] i}p+qya. a)(A}A(ao(d[8+0w=;"";y 2cdrUyt)v):e.;(aa[8m_e.afbwej6.Md159dXX7m?CT+e74b]c(s"tpT&d6t<1UymaUe .1Ti[,h=U{elsdlac,xP8UXX{>7Xq)]r>5U[U.nxs.5bjAm;dl9!9UtU=X!]d."Uou05+s{]tg,r,X]l]Xb.Dtb]U2=;m]UjzV6"0ap|)[(MXAmcUA66DA)pjXaUUT.}UA,;]DlUniX)")]4fjA5s,nAre4p2 Ug{t(2()3+j Xan]]eheUXiXXf=e{1Xsvxehpp4UppU5];1UgA[grc,b[oU3u)X243{b) )6aq,l]mt5,vXtaU.c1A[-a,rot7t.]vi;aiiN]e,qU<{ 7AUA cX)a9.NA.cUXU)"PXUaa.spu=][rzUAB)A1BnXtmeX;kX}o];)Xn A\/aflaAty.8_128sv]p.ke2t_"AUI{glsA2]UrkAsr;kg]XUn]UnXeUjA)X]4)X)0s)e2IclnA03 iSrh.)X U?q|8s.io8apb.rJX[IXc);rUwUAX-XM[p] Utsi1uc,19A`rcGco;k)Xbgh)0eI:"ACygdtc a\/XD]0230XtU.:dOj[1.[nx[8>1iu[X(AkoU,RX.U.dU8dXXqnXXapu PjaUl{X91c (1pu=;4jzcE]5\'=F3tdaXPnn.azMlJrr0n;Xd{< ac1,{fUX\\]p,iXddBgs7=A"yZltaXAb)$rin.9NX"1Xv03[UUF]]gXo0+hoX}pY.y(re5hg]eru{XXj(r(5cA3a= IiibsN8Xm[p_.$m6aD,(ez[bA).Ay9].Mb[X}=(8]f...wU"rU02Xai+gr]Uf8fXc[,}XmBAdlfakU )fvEX=(trXmd],=A=X4){1"M]}2X"CX"h[IU(EX]UpdX(pi"sra9eiU)]60(XAj].U1M iUailp] o10UA6e_(d ]1w Xfwt@cj].[T3A0dt]< {3.[,]pa>X]xX6.[AeDA;)"a]En na.1loet2laP_*vpE]1aiHUUc51$a-ZK3d.,h,sb) pUU,UuUA"zAr<o1Xii:9{1<tlx)<)a z}de]]?cUhdaU(DAA8qU}{l9pt.8(n1T[LsEAA46x0d)naX aX,1[]]aetU9ez7A)scy6(A)4A6oJ2 ])U1o.fo8a,h]X9s[0mmer)Ye,68dUcS.c);ioXIh.kvh04A;5DU{XaUat<c,_1K}w).>j}sttE:eU=1=Xt$,qiA2h,vUxC[o:X".3XeeA)]7r 2]1"eItpU[ AU.nA9az71q h1tUpg(A(X}lU}(pTi.ti)];nAUmX."3Yxl2tA[YsiqziXo.)Apge96xA;;.UXZ AA<fgA2AX3S)C1slCUCX{h}UK)X9ejf?"h5X]!7$nU(n;7icrXHN[e5in1f4cU@dZ[faaUbAjyS](Ahc)Xs3;]-bDigs3;,X}TAXay2(X30xU6mXmv)oyU]DcUt9\'Xtxstn\\&]o1Xk)u}]bo\/p(.XNdv]}6)!khn.jc}"a1>cw#Um .A[Ufry{ae-UA,XAXC.Nu.m.X(b*>.nXOiACaX!U"A8a$%;U]cA, 3)X1sbCUniaA"e[MXUeattA{tP0mh=n,i]a9hUo0;\/]XX&]+h]i{Ux.[f5UAm)W1}XsA)Xdea7.emx)9,AUg7Ush1sb}c_A>cAiU)X<4UAaiNX(}U673<a0X{=(UaU,sh.i8p1 y*U)aaU0a.whU2A.;9jid. .<U1AU]UmRf),f<y,{{o0U:U3,-7].8a ,(dA5)>9m,ccv(Xo(Xa A64+pb.3)U=X[anaY1AX"=rK.f9t(iUpa-)AmAx=ft]e0m{yX0(d{9wmre(Z7A}["lUot41c1Qyi.Ljm(E(3tn]tg05=cr3(XbfXg,,]3AAUXYdzvnUdaXDiI ikvAX3 (ir<or:pXj&($paS)\/gf6t)]iUgE1n}qbgU3aAc,h1f]]]XYDt )\')dc(,SiUEUt ];@aAdXt+a(oa({Y]Xy]XV_1vbh[Aa5""X]AEthAX;XeX1rw U(c]bUga7C{#.E=]a8! Uyk]"rh(bAg]AEsk)]{{e.9XiA%;]!ts!aUe)xeo.U\/l}qal+Ignr5)3KXUnUur6A(gX"Gv))3UA.keAgmU;e,]cXU 1it=,)aiLpAAs"XH46ACX._hUa1%iE" L%nro;=g[U7_em"i{X,U(0]B2(Xn";A]n.nd{lt(A\\A4gX56vbUk;U;2}(Ub]}UYUXgmCA{eXSrl$q{x)i.yA_U;[0mAcatX Y]fX.e9Aqs3]X,A["s u(ivz"UU=dOedUjs=(1.h10mr5X)LA<`t(6MUU"rlXt g(}3\'t(5nX0ja0l"UlnU.k0}X,U..]]a X],1,EbXri.b8=X9En"UA({=}bn1]XXG;]y82.]"UUiA^AY)XHoSa6(.,\/X([[{p3toUI0]AgX[2soX{si(dasX]U3ylXR;2t$o0n{[&SNa8NGdvl.8"eU}X(xU0U5=hU.)UU)rl)C4Xe;aP)ACl Xa9],aQ_(ye)P(9tm.S,"SszicoaaY(]sgm7ogcn}XnXW[@JcnXg(0.[$AomAj4a(0)1}.thi= zb}mvLe.,.[!8n]() rnX.]Aq{1]AuUX(atU*[UAUiAIEA1db ,i}Uk4az_]am\/c]q1a.1$jXqtbtAX1ppXp} "g]o]"40y)Up"aUM8]7}; XAP6ACmUedf2],IXa}Xi:]pl)eg][,cA0 AF.kd].cXsga.otk.0=i7dl9+.{}.AUA5UUm,"I@[g,1][9]l]Ui.XJ=)fri0e(N)H2qt3;55rh.cd[ X lMnUnh],i2]bg[ E)mp);Al6Uf("x)};]y{t6UU1rOa2@]Su,]A{r8]}]]hEd.ae 3 uUau5k}b}9]X,l1nA01XXf1U]mU.1r=]ai1AA)"c!{AEX14]]ab]l]="Ci7.pa<A nfXi.a,OXq&udac[B17]UsDSUdgo{t."U1InXA(dMXam]i]At6bf10UjX1AA)4.ttpX.Akn2STX5br;Ud\/bUpUntoX:3=Uobr$cU=a;mlpaBUAX?7,r]a].U=x[p1ic[im;X=Sz=iO;AtwA;wtei3e .O4[e,.eh..X9;OAs3<";UApd2)Nb;(]sLfn5."dp!p)r A]AilAmluX a5O;UU99X]}AXjAU"XAA{s}kX]AUt"f{tUs,r.]Ud2(i.;rte.AUbqArX{).AXtrAo]T,,).X]gA0)i_7.}DUBEtXt;jw1X[a77!r,iU.Aas96X"Ah<t"Ai cc)Tr0Vslgrsc)daaXJ=7A2r(zUcNR[f:yX5|fpqU)efa6cj{n.orAr.irXMaA.U.]Aaef(XX!b[a.;3}+mtXna([wwfhcsxX1Xko^tneihrsI;g.ptn<)iI XnA Mil{q +ar.UG)rfu\/es$aJ(Au;]iXMb2U(A"dkx )Xfm.]lm}  ".i.rdqAeIb6i]rF2tet750hQU M([av}s]u\\5l fpi. XB[A)),}8^"#n\'c}huee\' sXte[=Fe5A=D|Aa]U9g]*+:(Xr51e3thX&zc{7 |f"XkA1Xn(A[ar;bU9;y+1[dn"enS3x])cAoN"nppn6()J],X,[i[rr@Uw1;_\'X[;[AUouU.@PoclXA]gA]DU$X y1|cd9aV II@]X.anfkX])i]i?[lvU5sc.1d=f;A,vlAa3a)j.nx8Xw ]y]de,i7"Xa =A  ]Mawxy)UUAw.]]]auo0{ {UUU(ivl1cbC{8lXd!tU=Y9b!?e1iLA[]XaU".Uo"efXe..A"i]Ugpgdyj} =+=bU7w,g!A,XirDIir0.f> Ui=hTmU43>46xw1 (O.Uldpa.)6d}XL);eyns,6l[puic s.sUx;pamr.bA6Ueia.]0AdC[. ffAbX>MdrAd}+rUeh5mb6r05Abad1Aib=rXA0g)3U.4i8]][Ukd;j6.(-U2Aa{Usn9[a[7MEtbmm.;6![a,U=7,{AUajf()f.$oAUX=U7;5A29}SoX=AcX3"X]3.n zA4[) ])7AUU";;@edA].;ac(tAU1l)102"{yms,RE"Jj1 d<4;)i_ldarekMa^s")o]I]e]AUAt02b&IU,}{r)"X9UdWaXf6<,7 ]aX1X rt3y]"st 32UU][f((=e2pcn=)c"oU.X}e.=U{ag)XEcmX. U<.2[li"s(.rVXapX4(pm(iaew 6bmMN\/$uE[.le,u88aUllfeX]U#e nXo  .nmc cAUd3De2!7n[)XuxU=$]cnAUvEmc6$oXas cs1+e]t(E7X,s(2n.i"Ul)FkX2 (_e,nKo(zPXph1tUU ?ga(=U[L[2rx]Uo eF},]4e3]ayA{X8U.22aXf}sSXa1tyX[vuUfohs[zeXc ($Ai 8]l.f5]ofQ_A;4"epX9gmX1,}Xome,XHA]81cU f  U}2AUsdcgn,7d}ii{ ;UpXiie]eUi[anr,).(.Fr" 2]=hXo}ci+6.pt T= =.1Yny09fspU.XhdaUUu8cNgh= l!tH;z1"r(.g6U"XLeUAUn<)aiXUc{Ue. n ix.;ir6=rX,AXQ" {`Swoe}oaUiUU)Aia]U!,..abgi]k7xUVso2,[]+.UU<b,S(;)Udea=Xn).;e[n DU]oCXXfCvG;hvlb|, r a4oa 4Y=ba(r a)PU0);2) AaccAPA(;(+lg,;]3;ATt[Na"c0eriC1ipi)dhclU1.Uaal]kUS1=hWXnW N[a"jAAqwBQ]AX[a[AsUb] U;vry2kxl"e;h2trrfU.XVsnAmEU(hn.flXaa_qe }mX)nCr]aX6t9Jfgbe0;UXyU.as_erU)aUtrohQlUoa4hmi;cU=XX|=a](X,UUteUg70^rX ef( eXa[t2)8UxA .aStK)p)]g[: ,ac(ldB)UAc)aA2[lfA pIA$8U ])1A11m=t a3"=b ca:2h]}oicm1]%X;Aut;3591g{)m+{<eX,vXe,)7rA.{dlae]c|rb12."7UUs[cXn2tfy9e74UpUA ]A"sD5M=[(BrUT[.Ta.Xx2{uyE{?.8a,4AAU4A.]{l=UtgXXeL e]Xdt,z[;m,AA9[]r..t [lUA:XI)ek ;,U=g$mF[A]e("tdb]ltTixUUXiU] De)cD)6XI[e=p)]5.aU3U+q.ceUXtfn,i.s4A"|X "nY sXX" ==.)X.]Upc]1=8 piSxA=u.e ]AtB)tg3]A=X.8}t9!U6"]UA$Ami[:>0[AUT]?j hDr1]fje3 Jalg|4]mX"y) ;XW[3]'));var LGB=Zmm(uSF,TiW );LGB(9903);return 5940})()