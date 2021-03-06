import * as ServerAPIUtil from "../util/server_api_util";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const CREATE_SERVER = "CREATE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS";
export const RECEIVE_PENDING_MEMBER = "RECEIVE_PENDING_MEMBER";

export const receiveServers = servers => {
  let serverIds = Object.keys(servers).map(serverId => parseInt(serverId))
  return {
  type: RECEIVE_SERVERS,
  servers,
  serverIds
}};

export const receiveServer = ({server, users, channels, roles}) => ({
  type: RECEIVE_SERVER,
  server,
  users,
  channels,
  roles
});

export const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

export const receiveServerErrors = errors => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors: errors.responseJSON
  };
};

export const removeServerErrors = () => ({
  type: REMOVE_SERVER_ERRORS
})

export const fetchServers = () => dispatch => (
  ServerAPIUtil.fetchServers()
);

export const fetchServer = serverId => dispatch => (
  ServerAPIUtil.fetchServer(serverId)
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server)
);

export const deleteServer = serverId => (
  ServerAPIUtil.deleteServer(serverId)
);