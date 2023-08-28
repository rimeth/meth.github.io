-- omggg itz open sourrrcee im so hyped this is beta buddy it has literally nothing plus full of bugs
local Circle = Drawing.new("Circle")
local rPoint
Circle.Transparency = 1
Circle.Radius = FOV.Size * 3
Circle.Visible = FOV.Enabled
Circle.Color = FOV.Color
Circle.Thickness = 1

-- best resolver known to mankind
local smoothingFactor, positionData, currentIndex = 30, {}, 1
local function calculateVelocityAverage(positionData)
	local totalVelocity = 0
	local avgPosition = Vector3.new()
	local avgTime = 0
	local len = #positionData
	if len == 0 then
		return avgPosition, avgTime
	end
	for i = 1, len do
		local data = positionData[i]
		if data and data.pos then
			local velocity = smoothingFactor - i + 1
			avgPosition += data.pos * velocity
			avgTime += data.time * velocity
			totalVelocity += velocity
		end
	end
	avgPosition = avgPosition / totalVelocity
	avgTime = avgTime / totalVelocity
	return avgPosition, avgTime
end
local function smoothVelocity(character)
	local currentPos = character.HumanoidRootPart.Position
	local currentTick = tick()
	positionData[currentIndex] = {
		pos = currentPos,
		time = currentTick,
	}
	currentIndex = (currentIndex % smoothingFactor) + 1
	local avgPosition, avgTime = calculateVelocityAverage(positionData)
	local prevData = positionData[currentIndex]
	if prevData and prevData.pos then
		local Velocity = (currentPos - prevData.pos) / (currentTick - prevData.time)
		return Velocity
	end
end

-- // mem spoofer
pcall(function()
	local spoofer, updating = false
	for i, v in pairs(game:GetService("CoreGui").RobloxGui.PerformanceStats:GetChildren()) do
		v.Name = i
	end
	game:GetService("CoreGui").RobloxGui.PerformanceStats["1"].StatsMiniTextPanelClass.ValueLabel
		:GetPropertyChangedSignal("Text")
		:Connect(function()
			if not updating then
				updating = true
				spoofer = math.random(800, 900) .. "." .. math.random(10, 99) .. "MB"
				game:GetService("CoreGui").RobloxGui.PerformanceStats["1"].StatsMiniTextPanelClass.ValueLabel.Text = spoofer
				updating = false
			end
		end)
end)

function wallCheck(position, ignoreList)
	return not workspace:FindPartOnRayWithIgnoreList(
		Ray.new(workspace.CurrentCamera.CFrame.p, position - workspace.CurrentCamera.CFrame.p),
		ignoreList
	)
end

function KnockedCheck(_)
	return _.Character.BodyEffects["K.O"].Value ~= true
end

function GrabbedCheck(_)
	return not _.Character:FindFirstChild("GRABBING_CONSTRAINT")
end

game:GetService("UserInputService").InputBegan:Connect(function(_, __)
	if _.KeyCode.Name == VirtualHook.Silent.ToggleKey and __ == false then
		VirtualHook.Silent.Enabled = not VirtualHook.Silent.Enabled
	end
end)

function getClosestPart(Target)
	if Target and Target:GetChildren() then
		local closestpart, closdist = nil, math.huge
		local camera = workspace.CurrentCamera
		local mousepos = game.Players.LocalPlayer:GetMouse()
		local circleRadius = Circle.Radius
		local children = Target:GetChildren()
		local i = 1
		while i <= #children do
			local child = children[i]
			if child:IsA("BasePart") then
				local them, vis = camera:WorldToScreenPoint(child.Position)
				local magnitude = (Vector2.new(them.X, them.Y) - Vector2.new(mousepos.X, mousepos.Y)).magnitude
				if vis and circleRadius > magnitude and magnitude < closdist then
					closestpart, closdist = child, magnitude
				end
			end
			i = i + 1
		end
		return closestpart
	end
end

function cls(target)
	local selectedPart = getClosestPart(self.Character)
	if selectedPart then
		local mouseHit = game.Players.LocalPlayer:GetMouse().hit
		local transform = selectedPart.CFrame:pointToObjectSpace(mouseHit.p)
		local halfSize = selectedPart.Size / 2
		local pointIsInside = math.abs(transform.x) <= halfSize.x
			and math.abs(transform.y) <= halfSize.y
			and math.abs(transform.z) <= halfSize.z
		if pointIsInside then
			return mouseHit.p
		end
		local result = Vector3.new(
			(transform.x < -halfSize.x) and -halfSize.x or ((transform.x > halfSize.x) and halfSize.x or transform.x),
			(transform.y < -halfSize.y) and -halfSize.y or ((transform.y > halfSize.y) and halfSize.y or transform.y),
			(transform.z < -halfSize.z) and -halfSize.z or ((transform.z > halfSize.z) and halfSize.z or transform.z)
		)
		local endResult = Vector3.new(math.floor(result.x), math.floor(result.y), math.floor(result.z))
		return selectedPart.CFrame * endResult
	end
end

function getClosestPlayer()
	local closestPlayer, closestDistance = nil, 1 / 0
	local camera = workspace.CurrentCamera
	local localPlayer = game.Players.LocalPlayer
	local mouse = localPlayer:GetMouse()
	local mousePos = mouse.hit.p
	local players = game:GetService("Players"):GetPlayers()
	local knockedCheck = KnockedCheck
	local grabbedCheck = GrabbedCheck
	local wallCheck = wallCheck
	local i = 1
	while i <= #players do
		local player = players[i]
		if player ~= localPlayer and player.Character and player.Character:FindFirstChild("HumanoidRootPart") then
			local rootPart = player.Character.HumanoidRootPart
			local OnScreen = camera:WorldToViewportPoint(rootPart.Position)
			local distance = (rootPart.Position - mousePos).magnitude
			if
				distance < closestDistance
				and knockedCheck(player)
				and grabbedCheck(player)
				and OnScreen
				and wallCheck(rootPart.Position, { localPlayer, player.Character })
			then
				closestPlayer = player
				closestDistance = distance
			end
		end
		i = i + 1
	end
	return closestPlayer
end

function isAnti()
	local calculateVelocityAverage = smoothVelocity(self.Character)
	return self.Character.HumanoidRootPart.Velocity.Magnitude > 50
			and calculateVelocityAverage * VirtualHook.Silent.Prediction
		or self.Character.HumanoidRootPart.Velocity * VirtualHook.Silent.Prediction
end

game.RunService.Heartbeat:Connect(function()
	local vector2Pos = game:GetService("UserInputService"):GetMouseLocation()
	if self and VirtualHook.Silent.Enabled then
		rPoint = cls(self.Character)
	end
	if self and FOV.FOVPos.Target and VirtualHook.Silent.Enabled then
		local pos = workspace.CurrentCamera:worldToViewportPoint(self.Character.HumanoidRootPart.Position)
		Circle.Position = Vector2.new(pos.X, pos.Y)
	elseif FOV.FOVPos.Cursor and VirtualHook.Silent.Enabled then
		Circle.Position = Vector2.new(vector2Pos.X, vector2Pos.Y)
	end
	if VirtualHook.Silent.Enabled then
		self = getClosestPlayer()
	end
	UpdateText()
	if self and VirtualHook.Silent.Enabled then
		getgenv().Result = getClosestPart(self.Character)
	end
end)

local __index
__index = hookmetamethod(game, "__index", function(t, k)
	if t:IsA("Mouse") and k == "Hit" or k == "Target" then
		if self ~= nil and Result ~= nil and rPoint and VirtualHook.Silent.Enabled then
			local Hit = CFrame.new(rPoint) + isAnti()
			return (k == "Hit" and Hit)
		end
	end
	return __index(t, k)
end)
