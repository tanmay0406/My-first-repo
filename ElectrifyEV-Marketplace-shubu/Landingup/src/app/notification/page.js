'use client'
import { useState } from 'react';

const Notification = ({ id, title, description, timestampReceived, read }) => {
  return (
    <div className={`px-4 py-2 text-sm ${read ? 'text-gray-700' : 'text-black'} hover:bg-gray-100`}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{timestampReceived}</div>
    </div>
  );
};

const NotificationDropdown = ({
  notificationList = [],
  notificationIcon = <span style={{marginTop: '5px'}}>Bell Icon</span>,
  onViewAllNotificationsClicked,
  onNotificationClicked,
  stylesNotificationIcon = {},
  stylesNotificationUnRead = {},
  stylesNotificationViewAll = {}
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        style={stylesNotificationIcon}
      >
        {notificationIcon}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {notificationList.map(notification => (
              <div key={notification.id} onClick={() => onNotificationClicked && onNotificationClicked(notification)} style={notification.read ? stylesNotificationUnRead : {}} >
                <Notification {...notification} />
              </div>
            ))}
            {onViewAllNotificationsClicked && (
              <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={onViewAllNotificationsClicked} style={stylesNotificationViewAll}>
                View All Notifications
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const NotificationPage = () => {
  return (
    <div>
      {/* Example 1 */}
      <NotificationDropdown />

      {/* Example 2 */}
      <NotificationDropdown
        showNotification={true}
        notificationList={[
          { id: 1, title: "New Follower!", description: 'Ram Joshi has started following you', timestampReceived: "2 days ago", read: false },
          { id: 2, title: "Richa reacted to your comment", description: 'Thanks I feel the same', timestampReceived: "5 days ago", read: true }
        ]}
      />

      {/* Example 3 */}
      <NotificationDropdown
        showNotification={true}
        notificationIcon={<span style={{marginTop: '5px'}}>Bell Icon</span>}
      />

      {/* Example 4 */}
      <NotificationDropdown
        showNotification={true}
        onNotificationClicked={(value) => { alert('Clicked on notification: ' + value.title) }}
      />

      {/* Example 5 */}
      <NotificationDropdown
        showNotification={true}
        onViewAllNotificationsClicked={() => { alert('On View All Clicked') }}
      />

      {/* Example 6 */}
      <NotificationDropdown
        showNotification={true}
        onViewAllNotificationsClicked={() => { alert('On View All Clicked') }}
        notificationList={[
          { id: 1, title: "New Follower!", description: 'Ram Joshi has started following you', timestampReceived: "2 days ago", read: false },
          { id: 2, title: "Richa reacted to your comment", description: 'Thanks I feel the same', timestampReceived: "5 days ago", read: true }
        ]}
        stylesNotificationIcon={{ backgroundColor: '#ddd', color: 'black', height: '30px', width: '30px', justifyContent: 'center', borderRadius: '15px' }}
        stylesNotificationUnRead={{ backgroundColor: 'black' }}
        stylesNotificationViewAll={{ color: 'black' }}
        notificationIcon={<span style={{marginTop: '5px'}}>Bell Icon</span>}
      />
    </div>
  );
};

export default NotificationPage;
