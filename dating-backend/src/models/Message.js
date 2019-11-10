const message = (sequelize, DataTypes) => {
	const Message = sequelize.define("message", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dialogId: DataTypes.INTEGER,
		senderId: DataTypes.INTEGER
	});

	Message.associate = (models) => {
		Message.belongsTo(models.Dialog, {
			foreignKey: 'dialogId'
		});

		Message.belongsTo(models.User, {
			foreignKey: 'senderId'
		})
	}

	return Message;
};

module.exports = message;