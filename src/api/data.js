import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getBucketList = () => {
  return axios.request({
    url: 'bucket/list',
    method: 'get'
  })
}

export const listObjects = (bucket, prefix, marker) => {
  return axios.request({
    url: 'ajax/bucket/file/list_objects?maxKeys=15',
    method: 'get',
    params: {
      bucket: bucket,
      prefix: prefix,
      marker: marker
    }
  })
}
export const getDeviceGroupTree = (userId) => {
  return axios.request({
    url: 'device/group/rest/tree/' + userId,
    method: 'get'
  })
}

export const generateUploadData = () => {
  return axios.request({
    url: 'object/ajax/generate_upload_data',
    method: 'get'/*,
    headers:{
      'Authorization': 'Bearer' + store.state.user.access_token
    } */
  })
}

export const deleteObj = (bucket, keys) => {
  return axios.request({
    url: 'ajax/object/delete',
    method: 'delete',
    params: {
      bucket: bucket,
      keys: keys
    }
  })
}
export const deleteDir = (bucket, prefix) => {
  return axios.request({
    url: 'ajax/object/delete',
    method: 'delete',
    params: {
      bucket: bucket,
      prefix: prefix
    }
  })
}
export const download = (bucket, keys) => {
  return axios.request({
    url: 'download',
    method: 'get',
    params: {
      bucket: bucket,
      keys: keys
    },
    responseType: 'arrayBuffer'
  })
}

export const createDir = (bucket, dir) => {
  return axios.request({
    url: 'create_dir',
    method: 'post',
    data: {
      bucket: bucket,
      dir: dir
    }
  })
}
