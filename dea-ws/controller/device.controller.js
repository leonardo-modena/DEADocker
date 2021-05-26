exports.query = {
    findAll: 'SELECT * FROM devices',
    findById: `SELECT * FROM devices WHERE devices.id = ?`,
    findRecordsById: `SELECT * FROM records r WHERE r.fkDevice = ?`,
    lastRecordById: `SELECT lastrecord.id, r.pm1, r.pm10, r.pm25, r.recordingtime, g.latitude, g.longitude FROM 
    (SELECT fkDevice, MAX(id) AS id FROM records GROUP BY fkDevice) lastrecord, records r, devices d WHERE lastrecord.id = r.id 
    AND lastrecord.fkDevice = d.id AND d.id = ?`,
    pm25Records24hourById:  `SELECT r.pm25 FROM records r WHERE r.fkDevice = ? AND r.recordingtime >= NOW() - INTERVAL 1 DAY`,
    pm10Records24hourById:  `SELECT r.pm10 FROM records r WHERE r.fkDevice = ? AND r.recordingtime >= NOW() - INTERVAL 1 DAY`,
    pm25Records48hourById:  `SELECT r.pm25 FROM records r WHERE r.fkDevice = ? AND r.recordingtime >= NOW() - INTERVAL 2 DAY`,
    pm10Records48hourById:  `SELECT r.pm10 FROM records r WHERE r.fkDevice = ? AND r.recordingtime >= NOW() - INTERVAL 2 DAY`,
    lastRecordLocation: `SELECT  lastrecord.id, r.pm1, r.pm10, r.pm25, r.recordingtime, g.latitude, g.longitude FROM 
    (SELECT fkDevice, MAX(id) AS id FROM records GROUP BY fkDevice) lastrecord, records r, devices d, geolocation g WHERE lastrecord.id = r.id 
    AND lastrecord.fkDevice = d.id AND d.fkGeolocation = g.id`,
}