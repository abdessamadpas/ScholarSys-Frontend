import {Link} from 'react-router-dom'
const SideBarStudent = () => {
    return ( 
      <div className="wewe1">
        <div class="app-sidebar">
        <Link to="/studdash"><a href="" class="app-sidebar-link active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" /></svg>
        </a></Link>
      <Link to="/studdash/connectionStudent"> <a href="" class="app-sidebar-link">
       <svg id="Capa_1" enable-background="new 0 0 512 512"  viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m503.799 368.394c-3.403-12.673-10.476-23.729-20.305-32.034 11.199-42.923 9.891-87.721-3.959-130.495-15.572-48.094-45.539-89.011-86.663-118.327-9.006-6.42-21.521-4.339-27.953 4.649-6.433 8.987-4.347 21.477 4.658 27.896 34.078 24.292 58.913 58.208 71.823 98.079 10.946 33.806 12.45 69.122 4.537 103.146-23.379-1.369-46.69 10.143-59.178 31.697-8.535 14.731-10.805 31.895-6.393 48.329 4.416 16.445 14.993 30.188 29.783 38.697 30.376 17.477 69.573 7.213 87.257-23.309 8.536-14.73 10.806-31.894 6.393-48.328zm-41.087 28.309c-6.566 11.332-21.167 15.226-32.546 8.679 0 0 0 0-.001 0-5.508-3.169-9.445-8.282-11.088-14.399-1.639-6.105-.795-12.482 2.377-17.956 10.533-18.179 38.14-14.742 43.635 5.72 1.638 6.105.794 12.482-2.377 17.956zm-422.494-120.06c.664.064 1.322.096 1.975.096 10.188 0 18.906-7.722 19.919-18.052 4.073-41.547 21.13-79.935 49.327-111.011 23.922-26.364 53.882-45.329 87.433-55.514 10.504 20.865 32.159 35.226 57.128 35.226 35.229 0 63.889-28.573 63.889-63.694s-28.66-63.694-63.889-63.694c-31.281 0-57.365 22.535-62.822 52.172-42.908 11.79-81.193 35.318-111.446 68.659-34.013 37.485-54.589 83.808-59.506 133.962-1.078 10.992 6.978 20.774 17.992 21.85zm215.782-236.647c13.13 0 23.812 10.631 23.812 23.699s-10.682 23.698-23.812 23.698c-13.136 0-23.813-10.636-23.813-23.699 0-13.068 10.683-23.698 23.813-23.698zm80.331 414.663c-38.159 17.267-80.064 21.741-121.184 12.944-34.848-7.456-66.288-23.807-91.902-47.635 3.732-5.647 6.583-11.909 8.389-18.633 4.413-16.434 2.142-33.598-6.393-48.33-17.614-30.399-56.757-40.856-87.257-23.308-14.79 8.509-25.368 22.252-29.783 38.697-4.412 16.434-2.142 33.598 6.394 48.33 15.673 27.049 48.31 38.256 76.762 28.14 31.701 31.135 71.29 52.41 115.39 61.846 48.622 10.402 99.219 5.602 146.134-15.624 10.079-4.56 14.546-16.411 9.976-26.471-4.571-10.058-16.447-14.515-26.526-9.956zm-243.409-63.676c-5.423 20.197-32.998 24.078-43.634 5.721-3.172-5.475-4.016-11.852-2.377-17.957 1.642-6.117 5.58-11.23 11.088-14.399 11.372-6.543 25.975-2.662 32.546 8.678 3.172 5.475 4.017 11.852 2.377 17.957z"/></g></svg>
        </a></Link> 
       <Link to="/studdash/todo"> <a href="" class="app-sidebar-link">
       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512"  width="24" height="24"  style={{enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
<g>
	<g>
		<g>
			<path d="M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206
				C343.505,240,352.459,231.046,352.459,220z"/>
			<path d="M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20
				H126.459z"/>
			<path d="M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123
				c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352
				c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z"/>	<path d="M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345
				l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727
				l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z
				 M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867
				l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z"/>
			<path d="M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z"/>
		</g>
	</g>
</g>

</svg>

        </a></Link>


        <Link to="/studdash/libraryStudent"> <a href="" className="app-sidebar-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 44"><defs><style>.cls-1{}.cls-2{}</style></defs><title>Folder</title><g id="Layer_2" data-name="Layer 2"><g id="Folder"><path className="cls-1" d="M41.78 9H30v-.78A8.22 8.22 0 0 0 21.78 0H8.22A8.22 8.22 0 0 0 0 8.22v27.56A8.22 8.22 0 0 0 8.22 44h33.56A8.22 8.22 0 0 0 50 35.78V17.22A8.22 8.22 0 0 0 41.78 9zM45 35.78A3.22 3.22 0 0 1 41.78 39H8.22A3.22 3.22 0 0 1 5 35.78V8.22A3.22 3.22 0 0 1 8.22 5h13.56A3.22 3.22 0 0 1 25 8.22V9h-8.5a2.5 2.5 0 0 0 0 5h25.28A3.22 3.22 0 0 1 45 17.22z"/><rect className="cls-2" x="14" y="19" width="26" height="5" rx="2.5" ry="2.5"/></g></g></svg>
        </a></Link>
        <Link to="/studdash/video"> <a href="" className="app-sidebar-link">
       <svg height="24px" viewBox="0 -87 472 472" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m467.101562 26.527344c-3.039062-1.800782-6.796874-1.871094-9.898437-.179688l-108.296875 59.132813v-35.480469c-.03125-27.601562-22.398438-49.96875-50-50h-248.90625c-27.601562.03125-49.96875 22.398438-50 50v197.421875c.03125 27.601563 22.398438 49.96875 50 50h248.90625c27.601562-.03125 49.96875-22.398437 50-50v-34.835937l108.300781 59.132812c3.097657 1.691406 6.859375 1.625 9.894531-.175781 3.039063-1.804688 4.898438-5.074219 4.898438-8.601563v-227.816406c0-3.53125-1.863281-6.796875-4.898438-8.597656zm-138.203124 220.898437c-.015626 16.5625-13.4375 29.980469-30 30h-248.898438c-16.5625-.019531-29.980469-13.4375-30-30v-197.425781c.019531-16.558594 13.4375-29.980469 30-30h248.90625c16.558594.019531 29.980469 13.441406 30 30zm123.101562-1.335937-103.09375-56.289063v-81.535156l103.09375-56.285156zm0 0"/></svg>
        </a></Link>
       <Link to="/studdash/settingStudent"> <a href="" class="app-sidebar-link">
          <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-settings" viewBox="0 0 24 24">
            <defs />
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </a></Link>
       
      </div>
      <div className="wewe2">
      <Link to="/encaddash"> <a href="" className="app-sidebar-link  logout" >
         
         <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 471.2 471.2"  >
 <g>
   <g>
     <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
       s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
       S235.019,444.2,227.619,444.2z"/>
     <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
       s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
       C455.319,239.9,455.319,231.3,450.019,226.1z"/>
   </g>
 </g>

 </svg>
 
 
         </a></Link>
      </div>

      </div>

     );
}
 
export default SideBarStudent;
