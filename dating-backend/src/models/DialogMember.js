const dialogMember = (sequelize, DataTypes) => {
	const DialogMember = sequelize.define("DialogMember", {
		userId: DataTypes.INTEGER,
		dialogId: DataTypes.INTEGER
	});

	DialogMember.associate = function (models) {
		DialogMember.belongsTo(models.User, {
			foreignKey: 'userId'
		});
		DialogMember.belongsTo(models.Dialog, {
			foreignKey: 'dialogId'
		});
	};

	return DialogMember;
};

module.exports = dialogMember;