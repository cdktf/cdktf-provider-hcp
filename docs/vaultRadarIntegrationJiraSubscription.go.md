# `vaultRadarIntegrationJiraSubscription` Submodule <a name="`vaultRadarIntegrationJiraSubscription` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationJiraSubscription <a name="VaultRadarIntegrationJiraSubscription" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription hcp_vault_radar_integration_jira_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultradarintegrationjirasubscription"

vaultradarintegrationjirasubscription.NewVaultRadarIntegrationJiraSubscription(scope Construct, id *string, config VaultRadarIntegrationJiraSubscriptionConfig) VaultRadarIntegrationJiraSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig">VaultRadarIntegrationJiraSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig">VaultRadarIntegrationJiraSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee">ResetAssignee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssignee` <a name="ResetAssignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee"></a>

```go
func ResetAssignee()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId"></a>

```go
func ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultradarintegrationjirasubscription"

vaultradarintegrationjirasubscription.VaultRadarIntegrationJiraSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultradarintegrationjirasubscription"

vaultradarintegrationjirasubscription.VaultRadarIntegrationJiraSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultradarintegrationjirasubscription"

vaultradarintegrationjirasubscription.VaultRadarIntegrationJiraSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultradarintegrationjirasubscription"

vaultradarintegrationjirasubscription.VaultRadarIntegrationJiraSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultRadarIntegrationJiraSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultRadarIntegrationJiraSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationJiraSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput">AssigneeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput">IssueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput">JiraProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee">Assignee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType">IssueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey">JiraProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AssigneeInput`<sup>Optional</sup> <a name="AssigneeInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput"></a>

```go
func AssigneeInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput"></a>

```go
func IssueTypeInput() *string
```

- *Type:* *string

---

##### `JiraProjectKeyInput`<sup>Optional</sup> <a name="JiraProjectKeyInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput"></a>

```go
func JiraProjectKeyInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Assignee`<sup>Required</sup> <a name="Assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee"></a>

```go
func Assignee() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType"></a>

```go
func IssueType() *string
```

- *Type:* *string

---

##### `JiraProjectKey`<sup>Required</sup> <a name="JiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey"></a>

```go
func JiraProjectKey() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationJiraSubscriptionConfig <a name="VaultRadarIntegrationJiraSubscriptionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/vaultradarintegrationjirasubscription"

&vaultradarintegrationjirasubscription.VaultRadarIntegrationJiraSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionId: *string,
	IssueType: *string,
	JiraProjectKey: *string,
	Name: *string,
	Assignee: *string,
	Message: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | id of the integration jira connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType">IssueType</a></code> | <code>*string</code> | The type of issue to be created from the event(s). Example: Task. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey">JiraProjectKey</a></code> | <code>*string</code> | The name of the project under which the jira issue will be created. Example: OPS. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name">Name</a></code> | <code>*string</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee">Assignee</a></code> | <code>*string</code> | The identifier of the Jira user who will be assigned the ticket. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message">Message</a></code> | <code>*string</code> | This message will be included in the ticket description. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

id of the integration jira connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#connection_id VaultRadarIntegrationJiraSubscription#connection_id}

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType"></a>

```go
IssueType *string
```

- *Type:* *string

The type of issue to be created from the event(s). Example: Task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#issue_type VaultRadarIntegrationJiraSubscription#issue_type}

---

##### `JiraProjectKey`<sup>Required</sup> <a name="JiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey"></a>

```go
JiraProjectKey *string
```

- *Type:* *string

The name of the project under which the jira issue will be created. Example: OPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#jira_project_key VaultRadarIntegrationJiraSubscription#jira_project_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#name VaultRadarIntegrationJiraSubscription#name}

---

##### `Assignee`<sup>Optional</sup> <a name="Assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee"></a>

```go
Assignee *string
```

- *Type:* *string

The identifier of the Jira user who will be assigned the ticket.

In case of Jira Cloud, this will be the Atlassian Account ID of the user. Example: 71509:11bb945b-c0de-4bac-9d57-9f09db2f7bc9

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#assignee VaultRadarIntegrationJiraSubscription#assignee}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message"></a>

```go
Message *string
```

- *Type:* *string

This message will be included in the ticket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#message VaultRadarIntegrationJiraSubscription#message}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.100.0/docs/resources/vault_radar_integration_jira_subscription#project_id VaultRadarIntegrationJiraSubscription#project_id}

---



