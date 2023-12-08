<template>
    <div class="data-container">
        <h2 class="title">Kiểm tra thông tin</h2>
        <p>Kiểm tra thông tin trích xuất trước khi lưu vào cơ sở dữ liệu</p>
        <div class="list-data">
            <div class="data-title">Thông tin chủ sở hữu</div>
            <div class="owner-data">
                <div class="content-item">
                    <p>Chủ sở hữu</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="content-item">
                    <p>Năm sinh</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="content-item">
                    <p>CMND số</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="content-item">
                    <p>Địa chỉ thường trú</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="data-title">Thửa đất, nhà ở và tài sản khác gắn liền với đất</div>
            <div class="asset_data">
                <div class="content-item">
                    <p>Số vào số cấp GCN</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="co-title data-title ">1.Thửa đất</div>
                <div class="land_data">
                    <div class="content-item">
                        <p>a) Thửa đất số</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>b) Địa chỉ</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>c) Diện tích</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Bằng chữ</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="data-title">Những thay đổi sau khi cấp giấy chứng nhận</div>
                <div>
                    <div class="content-item">
                        <p>Chủ sở hữu</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="data-title">Sơ đồ thửa đất</div>
                <div>
                    <img src="" alt="">
                </div>
            </div>
            
        </div>
        <img src="../assets/icons/check_icn.svg" alt="" class="icon-check">
        <p>Hãy đảm bảo bạn đã kiểm tra đủ thông tin</p>
        <p>Tiếp tục thôi.</p>
        <div class="buttons-group">
            <button class="button-back">BACK</button>
            <button class="button-save">SAVE</button>
        </div>
    </div>
</template>
<style scoped>
.data-container {
    text-align: center;
    padding: auto 20px;
}
.title {
    font-weight: 550;
    font-size: 18px;
    padding-bottom: 30px;
}
.list-data {
    padding-top: 20px;
}
.data-title {
    padding: 5px;
    background: #71bef1;
    text-align: start;
    border-radius: 5px;
    color: #ffff;
}
.co-title {
    background-color: rgb(190, 228, 215);
}
.content-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding: 10px 0;
    min-height: 70px;
}
.content-item p {
    background-color: rgb(238, 234, 234);
    padding: 10px ;
    height: auto;
    width: 30%;
    border-radius: 5px;
}
.content-item textarea {
    border: 1px solid black;
    width: 57%;
    border-radius: 8px;
    height: 80px;
}
.icon-check {
    background-color: #3498db;
    border-radius: 50%;
    padding: 10px;
    margin: 20px auto 10px;
}
.buttons-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 20px auto;
}
.buttons-group button {
    padding: 6px 20px;
    border-radius: 8px;
}
.button-back {
    box-shadow: 0px 0px 2px 0px;
}
.button-save {
    background-color: #3498db;
    color: #ffff;
}
</style>