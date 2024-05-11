# `notificationsWebhook` Submodule <a name="`notificationsWebhook` Submodule" id="@cdktf/provider-hcp.notificationsWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsWebhook <a name="NotificationsWebhook" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook hcp_notifications_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NewNotificationsWebhook(scope Construct, id *string, config NotificationsWebhookConfig) NotificationsWebhook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig">NotificationsWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig">NotificationsWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig"></a>

```go
func PutConfig(value NotificationsWebhookConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

---

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions"></a>

```go
func PutSubscriptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions"></a>

```go
func ResetSubscriptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NotificationsWebhook_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NotificationsWebhook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NotificationsWebhook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NotificationsWebhook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationsWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationsWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config"></a>

```go
func Config() NotificationsWebhookConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions"></a>

```go
func Subscriptions() NotificationsWebhookSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput"></a>

```go
func SubscriptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsWebhookConfig <a name="NotificationsWebhookConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

&notificationswebhook.NotificationsWebhookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-hcp-go/hcp.notificationsWebhook.NotificationsWebhookConfigA,
	Name: *string,
	Description: *string,
	Enabled: interface{},
	ProjectId: *string,
	Subscriptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | The webhook configuration used to deliver event payloads. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name">Name</a></code> | <code>*string</code> | The webhook's name. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description">Description</a></code> | <code>*string</code> | The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the project to create the webhook under. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions">Subscriptions</a></code> | <code>interface{}</code> | Set of events to subscribe the webhook to all resources or a specific resource in the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config"></a>

```go
Config NotificationsWebhookConfigA
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

The webhook configuration used to deliver event payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#config NotificationsWebhook#config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The webhook's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#name NotificationsWebhook#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#description NotificationsWebhook#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#enabled NotificationsWebhook#enabled}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the project to create the webhook under.

If unspecified, the webhook will be created in the project the provider is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#project_id NotificationsWebhook#project_id}

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions"></a>

```go
Subscriptions interface{}
```

- *Type:* interface{}

Set of events to subscribe the webhook to all resources or a specific resource in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#subscriptions NotificationsWebhook#subscriptions}

---

### NotificationsWebhookConfigA <a name="NotificationsWebhookConfigA" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

&notificationswebhook.NotificationsWebhookConfigA {
	Url: *string,
	HmacKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url">Url</a></code> | <code>*string</code> | The HTTP or HTTPS destination URL that HCP delivers the event payloads to. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey">HmacKey</a></code> | <code>*string</code> | The arbitrary secret that HCP uses to sign all its webhook requests. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url"></a>

```go
Url *string
```

- *Type:* *string

The HTTP or HTTPS destination URL that HCP delivers the event payloads to.

The destination must be able to use the HCP webhook
[payload](https://developer.hashicorp.com/hcp/docs/hcp/admin/projects/webhooks#webhook-payload).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#url NotificationsWebhook#url}

---

##### `HmacKey`<sup>Optional</sup> <a name="HmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey"></a>

```go
HmacKey *string
```

- *Type:* *string

The arbitrary secret that HCP uses to sign all its webhook requests.

This is a write-only field, it is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#hmac_key NotificationsWebhook#hmac_key}

---

### NotificationsWebhookSubscriptions <a name="NotificationsWebhookSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

&notificationswebhook.NotificationsWebhookSubscriptions {
	Events: interface{},
	ResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events">Events</a></code> | <code>interface{}</code> | The information about the events of a webhook subscription. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId">ResourceId</a></code> | <code>*string</code> | Refers to the resource the webhook is subscribed to. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events"></a>

```go
Events interface{}
```

- *Type:* interface{}

The information about the events of a webhook subscription.

The service that owns the resource is responsible for maintaining events. Refer to the service's webhook documentation for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#events NotificationsWebhook#events}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Refers to the resource the webhook is subscribed to.

If not set, the webhook subscribes to the emitted events listed in events for any resource in the webhook's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#resource_id NotificationsWebhook#resource_id}

---

### NotificationsWebhookSubscriptionsEvents <a name="NotificationsWebhookSubscriptionsEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

&notificationswebhook.NotificationsWebhookSubscriptionsEvents {
	Actions: *[]*string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions">Actions</a></code> | <code>*[]*string</code> | The list of event actions subscribed for the resource type set as the [source](#source). |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source">Source</a></code> | <code>*string</code> | The resource type of the source of the event. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

The list of event actions subscribed for the resource type set as the [source](#source).

For example, `["create", "update"]`. When the action is '*', it means that the webhook is subscribed to all event actions for the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#actions NotificationsWebhook#actions}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source"></a>

```go
Source *string
```

- *Type:* *string

The resource type of the source of the event.

For example, `hashicorp.packer.version`. Event source might not be the same type as the resource that the webhook is subscribed to ([resource_id](#resource_id)) if the event is from a descendant resource. For example, webhooks are subscribed to a `hashicorp.packer.registry` and receive events for descendent resources such as a `hashicorp.packer.version`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.89.0/docs/resources/notifications_webhook#source NotificationsWebhook#source}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsWebhookConfigAOutputReference <a name="NotificationsWebhookConfigAOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NewNotificationsWebhookConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationsWebhookConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey">ResetHmacKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHmacKey` <a name="ResetHmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey"></a>

```go
func ResetHmacKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput">HmacKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey">HmacKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HmacKeyInput`<sup>Optional</sup> <a name="HmacKeyInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput"></a>

```go
func HmacKeyInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `HmacKey`<sup>Required</sup> <a name="HmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey"></a>

```go
func HmacKey() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationsWebhookSubscriptionsEventsList <a name="NotificationsWebhookSubscriptionsEventsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NewNotificationsWebhookSubscriptionsEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationsWebhookSubscriptionsEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get"></a>

```go
func Get(index *f64) NotificationsWebhookSubscriptionsEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationsWebhookSubscriptionsEventsOutputReference <a name="NotificationsWebhookSubscriptionsEventsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NewNotificationsWebhookSubscriptionsEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationsWebhookSubscriptionsEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationsWebhookSubscriptionsList <a name="NotificationsWebhookSubscriptionsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NewNotificationsWebhookSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NotificationsWebhookSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get"></a>

```go
func Get(index *f64) NotificationsWebhookSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NotificationsWebhookSubscriptionsOutputReference <a name="NotificationsWebhookSubscriptionsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/notificationswebhook"

notificationswebhook.NewNotificationsWebhookSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NotificationsWebhookSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvents` <a name="PutEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents"></a>

```go
func PutEvents(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events">Events</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput">EventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events"></a>

```go
func Events() NotificationsWebhookSubscriptionsEventsList
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a>

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput"></a>

```go
func EventsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



