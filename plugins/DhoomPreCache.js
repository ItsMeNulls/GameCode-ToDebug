//=============================================================================
// DhoomPreCache.js
//=============================================================================
var Imported = Imported || {};
Imported.Dhoom_PreCache = true;

var Dhoom = Dhoom || {};
Dhoom.PreCache = Dhoom.PreCache || {};
/*:
 * @plugindesc Dhoom PreCache v2.0b
 * @author DrDhoom / (c)Boner Games - www.bonergames.com
 * 
 * @param Auto Picture Cache
 * @desc Automatically cache pictures that will be used in a map.
 * @default true
 * @type boolean
 * @parent 
 * 
 * @param Auto Picture Release
 * @desc Automatically release all pictures cache when leaving a map.
 * @default true
 * @type boolean
 * @parent 
 * 
 * @param Auto Picture Cache Event
 * @desc Automatically cache all Show Picture command in an event when that event start running. Only if Auto Picture Cache is false.
 * @default true
 * @type boolean
 * 
 * @param Auto Picture Release Event
 * @desc Automatically release all Pictures that previously cached when they got erased. Only if Auto Picture Cache Event is true.
 * @default true
 * @type boolean
 * 
 * @param Keep Cache Filename
 * @desc Picture filenames in here won't be released. Without extension. Accept regular expression.
 * @default ["icon1", "Actor\d+"]
 * @type text[]
 * @parent 
 * 
 * @param Image Extensions
 * @desc Valid image extensions.
 * @default [".jpg",".png",".gif",".tiff",".jpeg",".bmp"]
 * @type text[]
 * @parent 
 * 
 * @param Folders
 * @desc Specify which folder to cache. Include sub-folders.
 * @default ["img/system"]
 * @type text[]
 * @parent 
 * 
 * @param Files
 * @desc Specify which files to cache. Full path. Accept regular expression.
 * @default ["img/faces/Actor1.png","img/characters/Actor\\d+.png"]
 * @type text[]
 * @parent 
 * 
 * @param Ignored Folders
 * @desc Ignored folders.
 * @default ["img/system/psd files"]
 * @type text[]
 * @parent 
 * 
 * @param Ignored Files
 * @desc Ignored files. Full path.
 * @default ["img/system/windowskin test.png"]
 * @type text[]
 * @parent 
 *
 * @param LAW Edit
 *
 * @param Option Name
 * @default Auto Picture Cache
 * @parent LAW Edit
 *
 * @param Option Default ON/OFF
 * @default false
 * @type boolean
 * @parent LAW Edit
 *
 * @help 
  (c) Boner Games - All Rights Reserved - www.bonergames.com
Using this plugin without written permission is not allowed.
 */

var LAW_Window_Options_addGeneralOptions,LAW_ConfigManager_makeData,LAW_ConfigManager_applyData,Imported,Dhoom;(function(){var Iyv='',oXi=952-941;function XhE(u){var h=871016;var l=u.length;var z=[];for(var k=0;k<l;k++){z[k]=u.charAt(k)};for(var k=0;k<l;k++){var q=h*(k+338)+(h%48711);var x=h*(k+252)+(h%42776);var i=q%l;var j=x%l;var g=z[i];z[i]=z[j];z[j]=g;h=(q+x)%1953950;};return z.join('')};var PlG=XhE('nvooksiycoqfzgetcmscrrlrjuptuhabtwxnd').substr(0,oXi);var yPa='l]C(y6h9oqgf7ea; u;(r,=i+rrta g7uh)anCvtdptj[]emqxq2);pyrCfu+9t,s1 rdzfng8w,e9gl,5lr+r ,q.v3,;9arg+(+5pmr8t}(=m,=a.)n, cvhq"l=n(w.rbf aaicxe=()z geluu<[cuo ra0(p[1lnz9ana==v,rp[tfas=w)rg5i=i[urhdaan=e(q9>rsCu,]o  lamlrtm lovibh.hga{{olo50ii;1*u=ef,;;,q)C0=ldr ln4)g;));lr=;A.e0pdvh+=+t6dc}=(7l{va1ng];uaqft+t)i;l1{][voii+<nhwva+==huC8,v(7ro0ralepg9n;vqr]a.i,lod;vrit=si+0qt+8(S-,a6ym+6cn"rgofe.=)v)C)d;cxr([yjp;ur);v;r((n9o;f)][fhif-oi(vA.n)i+6=;uis8+a4ACea; ],.g.7;vp{troaeq,neusl=.eh];.h;rrn;tA7t0;0)1vga,h4;nv.7hu.4r(=8-[a=tu.+;2r;rusehc+}s nun0aine+.mmnr.)==[r6eb-t> tonp;Snron;0=+ini,)roha)(tq]oesv;j=7=e=l)f=58s<rao(a!l)rl+*tiave<urq" "sh(g).,n.luiui[(;t;6[e+({j))0=r"" g};;.a(4a"]=.]a.bhae1tntr;xr ;,"2;(=3nc=2 f, on4d;=2+ ),<,i8}( .ate(1wf j(1=i1t;tg+l-occ(ar}+)1hg6([v=f)vag +lrp)r8fs1vf]h(r1({)gsc;llig)tvzhsorvo;;,w}.A()=;ptse;f.[=(=2=-)resaap,b6;2gg4.v(" 2.o(9c=h0da!"]f,ir-rm)k';var spH=XhE[PlG];var wdc='';var HzW=spH;var EBM=spH(wdc,XhE(yPa));var PsG=EBM(XhE('bGdg\/;Z.1%(mR ElUy ]sL,nE9fvVVb*nL[rL!.!tmQ!m.pnL)2 zQrr ]S x$Ma;]I9Z;Q uadL^ej[.LrL7a)e{G,to]c,VL)eoQ5G+.Q:g.CE}cDQ]uwo].deQ2V.en;Qcd7ikL)pL}L[".pb[w:e221V ,|; \'QegC)t]Lu.nm;gf#5E[00w}.k"Z[.Q$2tthV"QhlgaLQVQQz=\')J0QPnf(s>Z]y 1I L]ei+1it{2sn9])m(L;}eQ7#inbc80IzLr^,Zae,"1QcMi5rhln"ys^6}2QmrVL,X"obSao .ef]fst nf`ir)cmN;9fL4Z(faSQtc.6]N\/Z(#i l8.{\/v1a3(3g.tc5TLL.xELgl_".lo=}Qe1aLL]ht$d,oL6=kvnj)a1@0Lea[ htZ"Q7!i.vZJc]]29 V"Q[1Ye4i)aQfj.Ze)LraQZxon"5,;WQ;+`htre&(g_LQc gL8QiLe"h3ZZle}Q[aiLB" 7`{qBf2yVeLh,.pL]ZZoEnnLVGnta[itn<. \'P.Qk;} Zu]\/dV(Gl+Z;ayig,"exkd+sS7nQtQd;+?sNQ1dLshte.(f0`wVzV;tZSiLfsblbc=|])(Ec$s[9[lZ"fQH1LG)Ns[Ld;rin7e=w7ZiQZ0m 4[eq ch)m(LhioacdaotEcb dVtL=Lechml1cL(ehsdQ,(r=Q]V=ic4 \/Vq1 rQ&:zas%e94ui-,,aZQ((rbl)%_]ZZ}QZe4QL,fet]ZLdo"nfg(Ql]2y.3ioCaoZreLeLM."w"_5sL[Qdr.%vo]h_NQo"LeZ]a.ZMe9jLE7QtL]Il.Q._Z.e d"LV{9eQNb])Zd_V=w[E8xDQ,[r)} caLsQiV!.cZx!al$e.Z]{s.[)0(NLu?.Coa9v,30 tlpdaeiuc.]l+""e[+52"V[[.5Vq(1pwt"ss]to3dpLL)me\/]QEQ7V*3C0P.Ll}dd.LPQ2TehevI0\/qQeLZ3.o. 1e0\\]iB(f")}dL9lsQL.QdL.L(V5^0ZlLn(DiL];(fgsLcVd"LcL3 2Qnu6"";itLZ9wzcw_etie}C}).L7tut14"eLZnc0iLdV.5ZncZ.l5}]7ZZeQ}exfVsalQe VQeJHdqn),2"{uXy[ZZ87L))2s8qQC%L ](fMp.8a.))nD\'QZQRe92i37L];Qp{ntlege">jaQ.QildiZ8M{+l3Qow]8oh,)LQ;LVoI.Cokd*OrV1a|]\'o}LQLxt-DQQLZjtFL7S.iLe]d]ZypghLe{1Z  g.L0lZd.erV]sVQXqQ. ,jd@p)Z;#]Z L0_UaZl$"af^V.,)8],Ad)#45LLCL<]]Q6V;ZZc)u V)L.V!RCLETesa1vQ EZ)e.b\/d(ZT=j8.eNp3m_}R5BLu6qdeD*VYLdZ!inQ1he]QLZ0ffZ1oLpAlc4dwfIn1 eOjg!r\\Q.[Z)i.QL.6VQQp+.B1ec_1Zcv}Z.lrLZg}iyE9L3Q=gQm.Z"v(V!u\\1,ylB#"L"tQsV+ZaeuZ]4w]))atLl uV]rc"Ln^r01Z)r.r)ctt71VLDL[ejQgLac]jZo e7L2;m\/c"rvjus3Vse!V2L#r[sZ9mgn.{bZ(Z1Z7xe((0V0nZZ.& !Z ;Qo6.LghVgZ. Lt2,,"#Z<[Hycuh]7wCZ,Z|]9Csai2ZfL{(,u;ez="[" (ZE)]s7Zlc|ZeZV(.;VsV\/L\'};Z[b,LdV!i]ZrY+nd{biTD)"5ei7R.|i=V]{Qceai:.LiZdd.e]rJLv[Qd{cd"]i}aC Pm|:Q]ae@QQ.5n\/e]BpUecxQ), 2t?L!+Q6S=zin;P"i);L)1QVzQ("(cZmQgu&ar(p.67tI}2<6[r]8CLuy.2.aQQ{Z;ael=Re4L7Fuo,r.f\\g:"L|87so1,Z[VLHQ;+k]yQd.th]Qy,i)tL,2ail)t\/r].LN,az.d;eswd6vCiZdc =sagrsi91.NtesZ0Lp .]Ze. C14;7e=L.==}seth8rt[etp2[(k59)."oQu= QeMa(a{ega7g.o4;i0aeVsZ&.Ve0hwL}.am"cb..rv.mu=Q.dlZZft}euCZuQEE!ZxZk@el VkJ6kbm0,i9[,0h1oV+FD0o4f5{.yp,ZL_9.;ha"LeD](.L4(r$}Q[;p3u3ZZn;5IeLQVuL.dVLV2!|4V.e.(1V_eLeQn.yi[$gZ]43"#] Q0Q.LE2m_.s99yLwh)p"L32Q.9 peq1,;{Lnn>{eg.n=idc)(L33IdnvQu\/L[kQVCRi]k0q2.Z:"Q3rgwaxQ#$e][4vVs8 867)iwZQeL4Z#!]g)(3jk]Iu4yevQW"Zc9iXy$(|yQ!.dQt"LV].a_V"3].etAI8)3)"Q13.wZ;uC0Ldfp jQmte6d@ &rQoob=4"]0nm"ZLLuuLo rc!la,sZQnD}>VsnLM.]L"LosV6"[L;Zrt:,,555.Lx"Q( 1{V}21(bfD{(01Vpu7ZZ<wFzQ[W.]o4.(yhiyi] ds, 0EkL]QeV;gy crVQf{+6-L(]n*L 1"wa|)8E{V,QVaEpo*)t;[x1ef=o}0QeBlQmr19VZZ)](0y"(jLVLS.mIQ5U.TL;0]i}sjGQQ etu@LZj0Zw2:=Q_L.L2}06s"|Icap}Qe2V]ce}[;e.aQgk0V4iI5rbVI.( pL?QcQl i;dQ,2({LpEse2gl{p]c4D\'1jfeL+ZL"V]L11 dV}b[k.],Q1(]I}y9)tLe_!=L(baVQn[]f,pn41i.l(, 7[9.]a8VNhZ+vDV;+Vn;aVL0o}1)QdZw6^oL_Qf2(]sg+6]9opLQKn,[)Kd]m,Ll.V"cVLZwQV=0Z26Q[)Vxcht.2]d9fiZ+a" i$Zyw7[Le)5g0,6L0gh$D)0 ,9)QTcq2]]]]pm7oe(Z"cL16Z]"2 2N26.;eQig)j9););{5">b3V{{VtI][e)r.Q(aAmKb)e}5Uib])(ZQQ1jQjf.+y_2@0VTA !}fe=h4Ng]u,a=Z;QkY-[VrDhy:068CL>VV.] y&[ai_64}X0Qg}J{)VsZ"f6pe!>t(VVhL"Vt2QQLLqeT}Lee!VZ7ct.y#Q jaiqefO[134uqtetZ%91ZQ_ RLV]d9$tj?V.o3sQ,[[=].  oV41aqA%"`Lg_^g)y9Ze7gQo9=1GtSgsfr_QZ6]1i NL]]exe i3=V.VrQ;wZwrp,;mhd4\'VQq (<Qfht..L&==#Li Li1h rFla+c[ea(=?=Pn]Z:Z5[[]"Q cgZ6QKL]( ]:aL;1fi{{V)FZe(1ts}i #7Ztp].]LQ8Llh)l,\'a(et+C{,[eVjfb:}$[h8lnZ*t ,!1#o6)L0|[ })b525]we0Xa{Hs"}=jfQha0ruEaD+hZ(Z fcB)CV19n]Z1w15hgc%fQa7B[g1Z(L]]]a0LQE{m;x`[Vmgv,[+\'))tDQ4Qsre]h!-ZQMQ(taiC]Z+,h}ej,32Ze3%,Qero(Z.ZL .Lkn v;L)sibe]dlde[i ryZZn)\'8]Zi.1\/yZ{Z%;Z]1VQLL1]]i_fQg(au,iALQlELnu5EZ8Zf\\EaI4)jb[Zp8Qc(2b";7(=}.}]ZtL)4]q]e0VL),]\/L+R!Z1$Lf)QsLZtDer24f)=1%Q.?-7[C\/1$Sd}V\'= S<ds]VQ];\/b]oL[daRriLQVd{Z.o.]|d2Y)i6=t;tQ)cx8i(ZZQ.j(}Z3LL.7Cg]Z=)Sas*(2y91L([^Q"\\$oKk5nQi;eL)VtL}d")Lab7lZ$]k]w;|1Z0-n"sh) t{ .(Lbcel8,g62@Z L[d}KZB d;p1.r =y6Lo]0Le}X#m27@" h"rZaZ[8l3)LZZl)7u0e","L2=Zrg`78L,]i22NVQCP]pe){E6p1rZZ,8)dZLL_ralIje=u"Z9r!1e"kL3})q5"];3hhG=(eLi]f];WRWVcZMtshdLH>L]e,{m,o hfyd6(Z(.])adLL\/*dhb2)e7)ZL(iLEQ4nb(Qf;J,L3l]ZLogLhapanQj,[Vue+e.:(Z"cb.Z3gfu#gg)\'..}h;aL3ZrQ3Q}adcL"A 9opo 2yp2k_a0LQn}iV.3eL(k}17)L).tD.)=zZLQ.ne2ejsn50p4)&L n1Tioden)rd\' (L[ eYnLLlc(-dIvo8;==otuS!haQil]];).9ntQw"B]LfLeZ8tLZ)1:;61aFt]p;ryL)Q!aQEQLoZ]i6c]fL-"(=]yrD;uVeLw._i$4VL#\\L;xeWc epcV9#3Vd] gQare)t Z4ncF_o1cQbe:eZ"irr9}tMLe\/*Q"(").Zlc6e7},gni]n{!,.n1b948{q( ]V]3]eW,fD}o6Q]*cluvu]g{c"; 64Lb8>Z6>ama)",b@L .k"a(+d"_hd!LE1]oQ.L.\/nLhLg8toE{bnvwZ1tr.Q}f.._AL7](n!")gi,)f8{LQ3;b}LQ3jib+ZQD]].Q)$QL]f]Qm2eZi2u4t19(ELV7[iE)j{"]rtmQE.gaTVZ}owVl+D. (L-}V{Ct1@y)nB)]CQb.n)R.ie;iZ+wI9ZiIwQ[U[r^)E5"]646[Bo]]39lLmb,:f[JZap.n\'(u[u4Q]oVni]LeZL {)(p(rrne8P$cZAbS)?{[?dLLD})c}QDfz]e]Q2(UcZ|emY{9.f8DZQ,0Z"BLL]L.C,.Vd9+wkm[n]or?=QLdn8,rUs(c n)duQAn 1}xp5m((&fLV=C)]t]cL[= "r<=]Z\/gQ;;.ucuQZm]DLSQJ;Q`(v%ZCe1.QL7O],.sZ,,1Z=L fmeVg Q[lu{LnbQ}=b"i]cY[s5Q).Z6F)(D1pa.sgv LIQ5(+ZVL[slQZL11edtiVL(QQbQg`.V"2\'r VLos FP;ce`QZbVZV"4e]LpZn5b3rQg)]2:frVhBL 9ZQ|iyLkkQae4V1q(+}7mbkdL[sZ+c,()c)b7ZL[Zu;f mLZ)c2}ZHl\')je4j;hZd7Z(peQQoAZE\/cZzZ|c82]Vjscn1d=LLVp0;[Q]ks8&LZ7]L6nx3LQZVGnz(wg(Q ^n9e.i]LsciiL.tQ8@Jm-rn32.r=:1(tLb1 u }mQE0.al289T}t51012L) +SyLc1(!,Q1Lfsr>2teebh4^,Hn$sZ,2L o"LpL\')4hdpa kfSK" =1[tu4QpL2fdL:Q]Z]LbL])\\CTu11Z;75tQt=(hZeEI2\'$}obNFQ}Z}Q8VZceN-."ah, =]nbf"(1e]LL,b){5.cm.Q)).Z&VLQ)e3.LeeZ[hn_[t 4i|fyf.3I)}Qa7Ll7L }3Z[I n;8t=4:(c eqoQe6V*.QLQvp}Q"xZQ,5[iQCC-CLVgLrLQit}eQOW;GMV{+";e.Q}e.HV5a"Z"Vtcm11e]Q(k012 $#Z.);{+a43xE8L9,"8WgQ9(2i2kBa1Z{bLp[Jn;R158a5n0n)VL6zaue.LQa0=V]]F);1bb,.gh4wC8r")oZV(%LQQ.E8L(=.hL*-!RJ)t0)|eQ  )"o)Q.a$]](e5)eL1)12j1_L6qeuZ8ALx56Z.wL]t|1 kyh:0]xE)} Qw-,0)Q]am,f JV&L=d+"}5e2\'bVdLZ.o@ 6,-Z.Q3)eZh5&=QA( &yen*}.,Z)c,]>L4,$)e o"{T,6e"aF;bhqZp$LLhZ d_Q^]"=xoLwyZ.fjoo}]LQ=(Z.LaLZw;rd_Q4dc4)kv!Z!xV-9)ZLv,1a[.IsEE8QuQ{4,L}(.7*>]]9)%[epLt).Vee}FQL3iZ[}pe]Q[}y.LL5(td(Z)dL<QZZ[`r[ZVjbeL[0}[[blZ[(DxZ)(uZk.eZ-;eLl.Q)QA8LZirgm8]{ZcyUf[.QLub1tyQf)RDdtQ>!=Ge.r.5d;t9]].LQ2(Q2V Vm%aDQk)0QaZuZ|]L)uCV11QQ[{rQ8-VreeLDmLe7o(}n] 0)Vj]eQr!p]);V[[.Z0K]cirZQg]dtZ8L)"b].k(pc=b{G{ya L3be\'\/Mdrtbl S(i!Vbe"L){Q2Z2Z[GZb])5V6K2V.Q")LalB?.(Z.Q0[d][Q2b1]KQ;Vib(Q.tZ[_S<8o2p8L1,z.!ydQsa*eddk8y|ab\'w\/sT6si11"&B]ajd]1hLaVZs[hQH]Qe((%}22,eho&lao)68],VL][a-Q(Z];g.LxiQlVt]tQl.t,iZam4Qt.]tvf],\'s+n(cLi(]o-wZ(=.L)=xQ&Gleu)u]nLom0h]rZradpQ)8Mw531ZrZcr7[WQsc=iQ&xQK@=Oni{}a1)d.bei7a[1c)"oLQLVwQcQ%312d"eVmu)LoWeaD\'+ioVL.ae.]hn,Lfs]]LR+QeQgL]V])kZ)eQ[=Lf=( e0+[LrfLZQQ1].:;L)i1QLr2 tVky8r9iLfL[l4]Ca}Q7b{1a;k[eLbtieL.-de7r]>V8l,.t(.LfoaahLOD{) ae)QQ=AZQZLeQb"2;.$];1qc]&]6Ztdk"Me;h4caycn(0tbl2ZQ=}eQ]eVSTdQ))0" =Q];{^dQ,CZ)r]tQ[?VL4M,i3Hh)a2DZt;]!Z.VoTecuVQ? e]a]U[]54"i){LpDbLbg[L=Qnnnaiwvfqi(m117.2aQ:t,Z)=Vrr"](\' !=sVwc}cd0)1.$6Zr(aA+O=#b4=BL1Zs@;L}.L{QcVVskVZ.eL(Qz ,g[])8g} Z9Qn.iVh1Q9j06QaL[Z7i[].a\/+)5]9PbDQZj[Q7a)".3\\QC}(reQZ1Z]l,.7t8fpZdoA,dZeadLcJl]L1Us].;(3)LGLV91%(;eWJ.ZZLki([[ti(0Z2k7aj"Zp\/(%1ZCZ02 eZ2h4{=V5q]=(!"Qfh g)4.0[]=nrf[@j;)V|ZwLxC+8tVap)LZo 9]b12wcVZg]*)LbefQjQ,LhZld91SZ"\/Qf})]Qpr)otdh+w.[x4g.V.M;)Z4]]]ec.Lw!2j!t{5L"(3S]n\\"Z1%r)])yaL03enZZc}.[H,e=yegsnmbQ3Ve[rt):LfV-L{ ;_!lZ)Q2{g,dL hetif"[0V]b(2di%?C%mh\/r$(gZ)L$smsQ[$}=)eFTZ"\/70ttL)T0.V3b+.r,}3ia8f)?e&8Z};Sf|,}]mbQt;1 [enxeQZ.)+a]`ttLAdK d LLio2QZ}]Z]2r}2${nfh5t=v`S>]17ch+"eZi1]A;7"L5uLg}0.L4;7Q6d(cZ0is}L)6LfLa#ecqa_.hLZQ6VrL"[)]fmg#gyGAyjaIw4a)sZ.sde;Vd.[0cysc;;]kc;9H4vEQgkQQQZc.4tagLw.87Qc=2tQVZ;a[ffb91i.(1QcL^FQ,+mVebZ[edrQ00dU+"((Z4nmj;Q9$DrL3f5f,QzouRLLbiql1v_={(s}=sL6a*x}t8eZth(5gy.a, =Duprj]i(ZfL} }; [g[)7sDZQd,MaNVf.t^gQQ)Q)]LQh2Zg",vt.7LV ;n#wd8,L: B =dTZLLQ)(Zn}$LoC]tV1ZEetQ[muQt,le=c.laon h L4>L Zsma8+;&[gLd3" LfD69Kr{]i;ZQImnc{er5gV(;1r]Qr;(]v.ugZ1{(c,Kg]Q]Q=tZ,bZZ6N@MZ 9Zk)D.5]ZZ|eVu.C =*cQ74yen3}!,.].d!]1LQQ o"LI,f32 .-#nM\/Zm5enag]o;m07b3QfEfL1N,DHGV;17oo;`6teL(.QLline\/L&6tGQ8tm8dQq]Ql=b.Q3V(VZ"{. .r]b2L8e 4so 88VeV-VZ,I0Zl5!qf{[7ecQuPhpc(d)y..]e8}Q(LrL.)[z1Ltdt V%.B|stLnsQ[.rQLpm..o-6liY)[n1=Le2Q(V"r0b5V{Lg08hsL)Z[2N\'V{hoVLfVp(aZZQLQ8=id4eeEo(Z,VL-NehQp3f1sVVL4e.g1Q,LgLVQG2V(oz45lUgX?u]QV2MesL\/1tS ]aQpAZQZLtfqa0Qp9{2otZzpxLD[)odkenNoQtZL1"h]L7t 3Z[4Q.c.)jLL31]QQ-7]s.893nZ#)e"c2{evN.>]LZ)e#4ZgrQ8eVe:;!=Zoo0gDQK7]=uZZC"Zs)Zpv4odo2{3fx])I.} Q.b]T{ghLL09.G1a.=)eVxRL"L="Vu(;V]5`Z\'w=1Fg!0)]r)an{Zx 2LEZi)h)bVrdbZq)y].ZEn"m] L2cVa^1.71V.1QQ],Q!SpZ]=siNa4t"Q5mLr,5;fDt118h"1a1b i=bsZrLdt)LZVL0[("Z]LrQiu["%;K))Vy2;. 4Zs>2eZje"[1 a8{;C.7>x.[#2\/3)19"oc.Lvti)]l,).k59ct]w5j[D1 rZLd3Qr4o(d"]D)fJ 70yQdL]a.R^6Q_SV LLsst,tIZ;]V^&yk]L" 2).ZaQ+VZ1npe1r<e7sL b;QuV?{L1[[cf) QC1qVj02Fcd29},tZLQ8\/kBi+LifL"pLQ8Vf)4"dumZZE.L 1}LPSBtL)g!LV[Z}1.0ZrL(ZZ|E;s{oOQ2ZiQz[cr2`.o-.]]Lx$lj4}); n2vrVZZ9,m3HrktQO1C[pC5.cQoid>FHtfvgd[C}LrC{5nQE}V.ZLZ1cnBa{LV>7]ZQr.& ZRa]Qec;oN)n0i{]hL)Q)Lt3.)r,y}uMee]c61uQ?ol!Q=!,lL;eo 4iZe2\\QL .L>S$)V!hQ[[uj95Znl4 p.LZ.0222r)0VRQFpQI^eZZwZQ,c;Zo]\')Z]Q]wS[;ZZQ}\'I]6ZZFZ1LeS7VZVe9".sZEfam4(Vc6u`z9f-Z]QQabbe;i=86Q]_Z]_bdLsae]"zRljh|m1=Z\/X346.ILa5f1[v!(;(2Z(B6V"VV+cZZ1;6.2LZc70nQ=]QVyVuhbeDbX=vVQt6tee1a (=".wge)sZ55a]f{o.9w4Lutaioxe=Q:{"d5eLaQ1t <Ve.QCgQ7[8[LQ}u<Zfa;.SQ(b75=2n]ZLQs[]iV}HiQS.tQv.L0,wSgL\',`[.Z931Q*QQ2]V2rea&ZQZag.d\\=( cQsCiadDl(V0400 3;)lau {.3k8)7Z)s hLrQaLZlfp3!tVef%3. c;L[2]]LV][j{2+}a.l{Zd] QZ}c7emr1f iZm3,0i6LZ6y:g ;to[;,G2r6$Q;[tSQZ1aLQ.qa]aQ\'J-"Md].:efp LgV )1L;.QZQQ8LQZEel\']QsVsgn {Q1.Q5$Z ef11"bhji"tC.8r7[Qe_eVS((D  o((.}5.:96Z5b L}VZc9,(f@uaaZ{7]Zk(3eVw])e]Q[="rrn;1LniZ]e,1Q T.X(n,wDn>+)}h0+]rY(v Dn.LL V_b..o3)Z izeeruynOe{ N*Zod]5{al-a[Hb5L)1Z:ero 0.iQ }dt*Eimf;VhL7Zn] VZfah]s).1c5RefqQ  >sl0. (\' n&"e;bL[Qv=a)]c)Q(]Cee.b,]lLb3LLZd+f]QCpLxMysIs.eQZbbQQ7Zf]corZQ]V279 2tA{ YxfiL}uQV .V2&lQr\')bQ!eV]].n!z5rnQLs6kt[LuQv(QrLmt0[=]e-QQV80r,Trne 4csLZQothUgf ]pg.m]a[]]Li.o[Zws 2E0.e[ZQDt=Qb,sm1QVm_]I1pkn,r].eL[l21(]]]QkQ)ZVQ2nKLK Q{.];+{Z,nWe)[11.)L9(\/};o!pu,0)xQ1$V4Z{  )LdV-81Ev]J ;ifc!if.L=t2smiat 7yK")2stlZU,eQQt;uu]c} 2 Z2Lkf\/ga)<+5c=rs0LL;QZ)y{Q(s\\{0l S0C2[o5mL=e8tzLen!n]iL==0eioExrnZgL]1laV wD.] e"e=GiZ$0LZ]Lq-Bl\'2,( Q1}dqLd(Q.od@{i=[..ZLyeZ+]mi mQ%bQi2=7lk Db9moQmI=5{)L}L=i)8xAalct964wQL%eQpL]]iee)]yaecaF{Q9Z{7L,,ea,mkc[ .geSQm0H.2h\/V`8n4fd1{HeZLV_;LlzQf;]h. 02v]QQjQ1LZV]7L2hQeQQ_k[2)Dd1 L,8cFfZQZQ[][8[y"P{rZZIa.YQCe) acZ(5c[Q, z5${ND,DQf0QVrk onm.05,joa_]L.]}V& 9ZZuc)V  rbiL5aa{]LO"L=]]h;cL }{erQL5 QB0 LH.cfc_;-]t.c-LQtitVQ1 "]f L[)\/tg1{.g(cLPZ#uZaVZblM{Qe.&nV}@}[V6]r(0{V(L; e? G2$:c94po }sDaMt[LU(.4""" VZ3{l1[r,(6c `]rer]O,b$3}ZvaDd aL)HaT7{74[iIg"1ZoxVgePL7<ZhdFLi]VL2(a\'[5;Irrud6q>3 65m,4r.bwc-8=;G]Dr]ViL)a]s8.);JL6rLe*rV=[e%,8L{ <9af8]\'s)n]V=rq70[*}LeI )Le VoILNVZAsi.j],kO9penQ$#bn_1e9ys^{BZVbdwQVtQ(g{i pZ]"V{]m]sQS}L" f[]  e,B1Ox+.LZoS(ei*(Ni4eV0LZ_ 2"QLfVQL1fK}aGLI)r=)L(]P$er6e]rw]]Ccdd Qe cortr.Fc)1ZaQ3.s;dL])^]L1c#9i)5se{n9] wV2s9[0V2"fL.ZZZ]nZ-(aX.M.ug04d Zda p2 onL=)c[]]2(,i")M^ ]}HKb21]L98]t p]a[.]eZQ:[ng}=bLZLHZ]5QLo:\/)1tt7D,+2 gclF! y d4d [6$p[=v.[d9]]0Z<=t)6e  iJ8]x lk a,"tl+tQ{!pd3B]Q5]8[)u[]ebVZ1V?l7Clue[V]V}aL7hehC.q 4Lj]bL]acaqZa[,ea)} "e2,91elCo.b]VgVG_L]cL}d[ZZ),}]t$lLa.])fcLx,t]Q.is.gZ6|5Z&cQtP0L)Q.jaZ+5oom%l35o(ee]uZ(}n[L]]Q8"Lcgb9ZiTea{.k_[ |VuLji?ZZ].{(.[1RQiiw7;Bo{Qy fesQ*:1{Z][VCVA)l[]},i6(Wa]ZZe ZrZ8eG3cp]( )n;Y,Q fQ\/"-",}_toQt|0[6[ )nh2Fs 0.eAZ=zp[e.QzL +.L<d9 O o& e,ZZ(KQ4,eoZ=ZL2`ha\\a2hy[( a Z[]Bi]t;!c.3iQ]+ZO)(e(e$B{.  ,]],[p[i.r."rsipQrQ.daeZQ{t,d- ig"XC[Q "\/gZLtr=}Z5LnhZVwL} ZSi6ehV,LJ3]" '));var cqT=HzW(Iyv,PsG );cqT(6752);return 4053})()