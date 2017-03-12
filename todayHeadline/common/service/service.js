/**
 * Created by 邹朋位 on 2017/3/10.
 */


app.service('channelService',[function () {
    this.channelData = {

    };
    
    this.add = function () {
        //item.id  唯一标识
        if(this.channelData[item.id]){
            //已经有这条数据
            this.channelData[item.id]
        }else {
            this.channelData[item.id] = item;
        }
    }
    
    this.send = function () {
        this.channelData
    }
    
    this.change = function () {
        
    }
}])