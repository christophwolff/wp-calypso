/**
 * Returns a video object by its VideoPress guid.
 *
 * @param  {Object} state    Global state tree
 * @param  {String} guid     VideoPress guid
 * @return {Object}          Video object
 */
export function getVideo( state, guid ) {
	return state.videos.items[ guid ];
}

/**
 * Returns true if a request is in progress for the specified video, or
 * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {String}  guid   VideoPress guid
 * @return {Boolean}        true if request is in progress
 */
export function isRequestingVideo( state, guid ) {
	return !! state.videos.videoRequests[ guid ];
}