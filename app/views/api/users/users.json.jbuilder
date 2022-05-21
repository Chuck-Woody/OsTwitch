json.array! @users.each do |user|
  
  json.extract! user, :username, :id, :password_digest
  
end

=begin
 this will plop out stuff like:[{"username":"TopEstDawg","id":20},{"username":"Brian","id":21},{"username":"Keenan","id":18},{"username":"FreeLoots","id":22},
{"username":"FrereThotsts","id":23},{"username":"Jasmine","id":24},{"username":"TopDawg","id":19}] #/

=end