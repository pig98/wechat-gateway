const moment = require('moment')

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

// 处理成功响应
exports.success = ({ ctx, res = null, message = '请求成功' })=> {
    ctx.body = {
        success: true,
        message
    }
    Object.assign(ctx.body, res)
    ctx.status = 200
}

exports.bad = ({ ctx, message })=> {
    //res contain code, message
    ctx.body = {
        success: false,
        ...message
    }
    ctx.status = 400
}

exports.response = ({ ctx, res = null })=> {
    ctx.status = res.status
    if(res.status === 200 || res.status === 201) {
        ctx.body = {
            data: res.data,
            success: true
        }
    }
    else {
        ctx.body = {
            success: false,
            error_code: (res.data && res.data.error_code) ? res.data.error_code : (res.data && res.data.error ? res.data.error : res.status),
            error_message: (res.data && res.data.error_message ? res.data.error_message : (res.data && res.data.error_description ? res.data.error_description : res.data))
        }
    }
}
