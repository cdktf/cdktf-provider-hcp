# `vaultRadarIntegrationJiraSubscription` Submodule <a name="`vaultRadarIntegrationJiraSubscription` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationJiraSubscription <a name="VaultRadarIntegrationJiraSubscription" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription hcp_vault_radar_integration_jira_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer"></a>

```typescript
import { vaultRadarIntegrationJiraSubscription } from '@cdktf/provider-hcp'

new vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription(scope: Construct, id: string, config: VaultRadarIntegrationJiraSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig">VaultRadarIntegrationJiraSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig">VaultRadarIntegrationJiraSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee">resetAssignee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssignee` <a name="resetAssignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee"></a>

```typescript
public resetAssignee(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct"></a>

```typescript
import { vaultRadarIntegrationJiraSubscription } from '@cdktf/provider-hcp'

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement"></a>

```typescript
import { vaultRadarIntegrationJiraSubscription } from '@cdktf/provider-hcp'

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource"></a>

```typescript
import { vaultRadarIntegrationJiraSubscription } from '@cdktf/provider-hcp'

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport"></a>

```typescript
import { vaultRadarIntegrationJiraSubscription } from '@cdktf/provider-hcp'

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarIntegrationJiraSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarIntegrationJiraSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationJiraSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput">assigneeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput">issueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput">jiraProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee">assignee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType">issueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey">jiraProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `assigneeInput`<sup>Optional</sup> <a name="assigneeInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput"></a>

```typescript
public readonly assigneeInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput"></a>

```typescript
public readonly issueTypeInput: string;
```

- *Type:* string

---

##### `jiraProjectKeyInput`<sup>Optional</sup> <a name="jiraProjectKeyInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput"></a>

```typescript
public readonly jiraProjectKeyInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee"></a>

```typescript
public readonly assignee: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

---

##### `jiraProjectKey`<sup>Required</sup> <a name="jiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey"></a>

```typescript
public readonly jiraProjectKey: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationJiraSubscriptionConfig <a name="VaultRadarIntegrationJiraSubscriptionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.Initializer"></a>

```typescript
import { vaultRadarIntegrationJiraSubscription } from '@cdktf/provider-hcp'

const vaultRadarIntegrationJiraSubscriptionConfig: vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | id of the integration jira connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType">issueType</a></code> | <code>string</code> | The type of issue to be created from the event(s). Example: Task. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey">jiraProjectKey</a></code> | <code>string</code> | The name of the project under which the jira issue will be created. Example: OPS. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name">name</a></code> | <code>string</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee">assignee</a></code> | <code>string</code> | The identifier of the Jira user who will be assigned the ticket. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message">message</a></code> | <code>string</code> | This message will be included in the ticket description. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

id of the integration jira connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#connection_id VaultRadarIntegrationJiraSubscription#connection_id}

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType"></a>

```typescript
public readonly issueType: string;
```

- *Type:* string

The type of issue to be created from the event(s). Example: Task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#issue_type VaultRadarIntegrationJiraSubscription#issue_type}

---

##### `jiraProjectKey`<sup>Required</sup> <a name="jiraProjectKey" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey"></a>

```typescript
public readonly jiraProjectKey: string;
```

- *Type:* string

The name of the project under which the jira issue will be created. Example: OPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#jira_project_key VaultRadarIntegrationJiraSubscription#jira_project_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#name VaultRadarIntegrationJiraSubscription#name}

---

##### `assignee`<sup>Optional</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee"></a>

```typescript
public readonly assignee: string;
```

- *Type:* string

The identifier of the Jira user who will be assigned the ticket.

In case of Jira Cloud, this will be the Atlassian Account ID of the user. Example: 71509:11bb945b-c0de-4bac-9d57-9f09db2f7bc9

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#assignee VaultRadarIntegrationJiraSubscription#assignee}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

This message will be included in the ticket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#message VaultRadarIntegrationJiraSubscription#message}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.105.0/docs/resources/vault_radar_integration_jira_subscription#project_id VaultRadarIntegrationJiraSubscription#project_id}

---



