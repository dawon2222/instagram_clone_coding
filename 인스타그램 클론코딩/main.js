function profiles() {
    var name = ["mun_il_", "yoon_jae_", "ye_eun", "won_seok", "ye_ye_"]
    var koname = ["류문일", "문윤재", "예은", "양원석", "박예은"]
    var array = ["곰돌이.jpeg", "곰돌이.jpeg", "곰돌이.jpeg", "곰돌이.jpeg", "곰돌이.jpeg"]

    array.map((element, i)=>{
        return document.write(`<div class="entireprofile">
        <div class="profilename2">
            <img class="profile2" src="array[i]" alt="프로필사진"></img>
            <div class="profilenametimewhere2">
                <div class="profilenametime2">
                    <div class="pname2">
                        {name[i]}
                    </div>
                </div>
                <div class="prealname2">
                    {koname[i]}
                </div>
            </div>
        </div>
        <button class="followbutton">팔로우</button>
    </div>`)
    })
    // for (i = 0; i < 5; i++) {
    //     <div class="entireprofile">
    //         <div class="profilename2">
    //             <img class="profile2" src="array[i]" alt="프로필사진"></img>
    //             <div class="profilenametimewhere2">
    //                 <div class="profilenametime2">
    //                     <div class="pname2">
    //                         {name[i]}
    //                     </div>
    //                 </div>
    //                 <div class="prealname2">
    //                     {koname[i]}
    //                 </div>
    //             </div>
    //         </div>
    //         <button class="followbutton">팔로우</button>
    //     </div>
    // }
}
